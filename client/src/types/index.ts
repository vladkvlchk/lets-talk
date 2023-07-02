export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    profile_photo: string,
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