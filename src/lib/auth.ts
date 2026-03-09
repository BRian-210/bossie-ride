import jwt from 'jsonwebtoken'

export type AuthTokenPayload = {
  sub: string
}

function getJwtSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is not set')
  return secret
}

export function signAuthToken(userId: string) {
  return jwt.sign({ sub: userId } satisfies AuthTokenPayload, getJwtSecret(), {
    expiresIn: process.env.JWT_EXPIRES_IN || '30d',
  })
}

export function verifyAuthToken(token: string) {
  return jwt.verify(token, getJwtSecret()) as AuthTokenPayload
}

export function getBearerToken(request: Request) {
  const auth = request.headers.get('authorization') || ''
  const match = auth.match(/^Bearer\s+(.+)$/i)
  return match?.[1] || null
}

