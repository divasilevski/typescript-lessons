enum Membership {
  Simple,
  Standart,
  Premium
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM"
}

const social = SocialMedia.INSTAGRAM;



// from handbook
// there are constant and computed enums:
enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}



enum LogLevel {
  ERROR, WARN, INFO, DEBUG
}

type LogLevelStrings = keyof typeof LogLevel;



const enum Directions { // const enums
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]



declare enum Enum { // Ambient enums 
  A = 1,
  B,
  C = 2
}