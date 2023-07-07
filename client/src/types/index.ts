export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile_photo: string;
};

export interface GoogleDataType {
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  jti: string;
  name: string;
  nbf: number;
  picture: string;
  sub: string;
}

export type ContactItemType = {
  id: string;
  first_name: string;
  last_name: string;
  profile_photo: string;
  last_seen: string;
};

export type AddContactModalType = {
  onClose: () => void;
  onAlert: ({ severity, text }: AlertType) => void;
};

export type AlertType = {
  severity: "error" | "warning" | "info" | "success";
  text: string;
};

export type currentPageType = {
  type: "empty" | "contact" | "dialogue";
  id: string;
};

export type ContactDataType = {
  id: string;
  first_name: string;
  last_name: string;
  profile_photo: string;
  last_seen: string;
  email: string;
};
