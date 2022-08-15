import crypto from 'node:crypto';

const algorithm = 'aes-256-cbc';

export function encrypt(key: Buffer, text: string, encoding?: BufferEncoding): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8');
  encrypted = Buffer.concat([iv, encrypted, cipher.final()]);
  return encrypted.toString(encoding || 'base64');
}

export function decrypt(key: Buffer, encrypted: string, encoding?: BufferEncoding): string {
  const buf = Buffer.from(encrypted, encoding || 'base64');
  const iv = buf.subarray(0, 16);
  const data = buf.subarray(16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let dec = decipher.update(data);
  dec = Buffer.concat([dec, decipher.final()]);
  return dec.toString('utf8');
}

export function encryptJson(
  key: Buffer,
  json: Record<string, unknown>,
  encoding?: BufferEncoding,
): string {
  return encrypt(key, JSON.stringify(json), encoding);
}

export function decryptJson<T extends Record<string, unknown>>(
  key: Buffer,
  encrypted: string | null | undefined,
  encoding?: BufferEncoding,
): T | null {
  if (!encrypted) {
    return null;
  }
  return JSON.parse(decrypt(key, encrypted, encoding));
}
