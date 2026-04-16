export type ContactStatus = 'active' | 'inactive';

export interface Contact {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly status: ContactStatus;
  readonly favorite: boolean;
}
