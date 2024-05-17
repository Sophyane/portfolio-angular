export interface Language {
  readonly name: string;
  readonly emoji: string;
  readonly level: string;
}

export interface Hobby {
  readonly name: string;
  readonly emoji: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  subject: string;
  message: string;
}
