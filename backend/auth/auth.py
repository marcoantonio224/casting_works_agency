import json
import os
from functools import wraps
from jose import jwt
from urllib.request import urlopen
from flask import request, _request_ctx_stack, abort


AUTH0_DOMAIN = os.getenv('AUTH0_DOMAIN')
ALGORITHMS = ['RS256']
API_AUDIENCE = 'movies'

## AuthError Exception
'''
AuthError Exception
A standardized way to communicate auth failure modes
'''
class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code

## Auth Header

# Validate token to make sure it's valid
def get_token_auth_header():
    """ Get the Access Token from the Authorization Header """
    auth = request.headers.get('Authorization', None)
    print(auth)
    try:
        # Check to see if Authoriztion header is present
        if auth is None:
          raise AuthError({
              'code': 'authorization_header_missing.',
              'description': 'Authorization header is expected.'
          }, 401)
        # Check the Authorization object and token to make sure they are valid
        parts = auth.split()
        if parts[0].lower() != 'bearer':
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Authorization header must begin with "Bearer".'
            }, 401)
        # Check the length of the Authorization header
        elif len(parts) == 1:
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Token not found.'
            }, 401)
        elif len(parts) > 2:
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Authorization header must be bearer token.'
            }, 401)
        # If all tests pass, grab the encoded token and return it
        token = parts[1]
        return token
    # Return the exception's response
    except Exception as e:
        return e

def check_permissions(permission, payload):
    # Check to see if permissions is in payload
    if 'permissions' not in payload:
        raise AuthError({
            'code': 'invalid_claims',
            'description': 'Permissions not included in JWT.'
        }, 400)
    # Check to see if permissions key is in payload
    if permission not in payload['permissions']:
        raise AuthError({
            'code': 'unauthorized',
            'description': 'Permission not found.'
        }, 401)
    # If conditions failed, then return true
    return True


def verify_decode_jwt(token):
    jsonurl = urlopen(f'https://{AUTH0_DOMAIN}/.well-known/jwks.json')
    jwks = json.loads(jsonurl.read())
    unverified_header = jwt.get_unverified_header(token)
    rsa_key = {}
    if 'kid' not in unverified_header:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization malformed.'
        }, 401)

    for key in jwks['keys']:
        if key['kid'] == unverified_header['kid']:
            rsa_key = {
                'kty': key['kty'],
                'kid': key['kid'],
                'use': key['use'],
                'n': key['n'],
                'e': key['e']
            }
    if rsa_key:
        try:
            # Decode the JWT token
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=ALGORITHMS,
                audience=API_AUDIENCE,
                issuer='https://' + AUTH0_DOMAIN + '/'
            )
            return payload
        # Throw error if token expired
        except jwt.ExpiredSignatureError:
            raise AuthError({
                'code': 'token_expired',
                'description': 'Token expired.'
            }, 401)
        # Throw error if claims are invalid
        except jwt.JWTClaimsError:
            raise AuthError({
                'code': 'invalid_claims',
                'description': 'Incorrect claims. Please, check the audience and issuer'
            }, 401)
        # Throw error if bad request
        except Exception:
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Unable to parse authentication token.'
            }, 400)
    # Else raise error if bad request
    raise AuthError({
        'code': 'invalid_header',
        'description': 'Unable to find the appropriate key.'
    }, 400)

def requires_auth(permission=''):
    def requires_auth_decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            token = get_token_auth_header()
            try:
                # Make sure token is verified first
                payload = verify_decode_jwt(token)
                # Check if token has permission to perform action
                check_permissions(permission, payload)
            except:
                abort(401)
            return f(payload, *args, **kwargs)
        return wrapper
    return requires_auth_decorator

