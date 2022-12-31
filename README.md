# faker-en

This is a much smaller version of faker-js that is meant to only support english mock-data generation.

Each method can be imported on its own so that the impact to your project's bundle is limited.

This is still a work in progress so many of the features from `faker-js` are still missing.

## API

faker-en is a package that generates usable random data in English. It exports the following methods:

### `person`

This submodule contains methods for generating random data related to people. To use these methods, you can import them like this:

```typescript
import { firstName, fullName, lastName, phoneNumber } from "faker-en/person";

const groom = {
  firstName: firstName("male"),
  lastName: lastName(),
  phoneNumber: phoneNumber(),
};

const bride = {
  firstName: firstName("female"),
  lastName: lastName(),
  phoneNumber: phoneNumber(),
};
```

#### `firstName`

#### singular import

```typescript
import { firstName } from "faker-en/person/firstName";
```

##### parameters

`gender?: Gender` - optional, either 'male' or 'female'. Random by default.

#### description

Generates a random first name for a person.

#### `fullName`

##### singular import

```typescript
import { fullName } from "faker-en/person/fullName";
```

##### parameters

`gender?: Gender` - optional, either 'male' or 'female'. Random by default.

##### description

Generates a random full name for a person, including a first name and last name.

#### `lastName`

##### singular import

```typescript
import { lastName } from "faker-en/person/lastName";
```

##### parameters

This function accepts no parameters

##### description

Generates a random last name for a person.

#### `phoneNumber`

##### singular import

```typescript
import { phoneNumber } from "faker-en/person/phoneNumber";
```

##### parameters

1. `props?: PhoneNumberProps` - optional, an object containing the following properties:

   - `props.areaCode?: string` - optional, a string containing the area code for the phone number. Random by default.
   - `props.format?: PhoneFormat` - optional, a string containing the format for the phone number. The options are `"standard" | "business" | "international" | "plain"`
     - `"standard"`: `212-555-5555`
     - `"business"`: `(212) 555-5555`
     - `"international"`: `+1 212-555-5555`
     - `"plain"`: `2125555555`

##### description

Generates a random phone number for a person.

### `utils`

This submodule contains utility methods that are used by other methods in faker-en. To use these methods, you can import them like this:

```typescript
import {
  arrayElement,
  arrayElements,
  gender,
  randomNumber,
  shuffle,
} from "faker-en/utils";
```

#### `arrayElement`

##### singular import

```typescript
import { arrayElement } from "faker-en/utils/arrayElement";
```

##### parameters

1. `array` - an array of any type

##### description

Returns a random element from an array.

#### `arrayElements`

##### singular import

```typescript
import { arrayElements } from "faker-en/utils/arrayElements";
```

##### parameters

1. `array` - an array of any type
2. `count` - the number of elements to return. (min: `0`, max: `array.length`)
   Returns a specified number of random elements from an array.

##### description

Returns a specified number of random elements from an array.

#### `gender`

##### singular import

```typescript
import { gender } from "faker-en/utils/gender";
```

##### parameters

1. `exact?: Gender`: `"male"` or `"female"`. If this is provided then the function will return this value

##### description

Returns a random gender (either "male" or "female").

#### `randomNumber`

##### singular import

```typescript
import { randomNumber } from "faker-en/utils/randomNumber";
```

##### parameters

1. `opts: RandomNumberProps` - an object with the following properties. Required.
   - `opts.min: number` - the minimum value for the random number. Optional. Defaults to 0.
   - `opts.max: number` - the maximum value for the random number. Required.

##### description

Generates a random number within a specified range.

#### `shuffle`

##### singular import

```typescript
import { shuffle } from "faker-en/utils/shuffle";
```

##### parameters

1. `array: any[]` - An array of any type

##### description

Randomly shuffles the order of elements of an array.
