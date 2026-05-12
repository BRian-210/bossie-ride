import pkg from 'jsonwebtoken'
const { sign, verify } = pkg
import type { SignOptions } from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

export type AuthTokenPayload = {
  sub: string
}

function getEnvVar(name: string): string | undefined {
  if (process.env[name]) return process.env[name]
  try {
    const envPath = path.resolve(process.cwd(), '.env')
    if (!fs.existsSync(envPath)) return undefined
    const contents = fs.readFileSync(envPath, 'utf8')
    const m = contents.match(new RegExp('^' + name + "\\s*=\\s*(.*)$", 'm'))
    if (!m) return undefined
    let val = m[1].trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    return val || undefined
  } catch (e) {
    return undefined
  }
}

function getJwtSecret() {
  const secret = process.env.JWT_SECRET || getEnvVar('JWT_SECRET')
  if (!secret) throw new Error('JWT_SECRET is not set')
  return secret
}

export function signAuthToken(userId: string) {
  const payload: AuthTokenPayload = { sub: userId }
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || '30d') as unknown as SignOptions['expiresIn'],
  }
  return sign(payload, getJwtSecret() as any, options)
}

export function verifyAuthToken(token: string) {
  return verify(token, getJwtSecret() as any) as AuthTokenPayload
}

export function getBearerToken(request: Request) {
  const auth = request.headers.get('authorization') || ''
  const match = auth.match(/^Bearer\s+(.+)$/i)
  return match?.[1] || null
}

