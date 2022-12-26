# faker-en

This is a much smaller version of faker-js that is meant to only support english mock-data generation.

Each method can be imported on its own so that the impact to your project's bundle is limited.

This is still a work in progress so many of the features from `faker-js` are still missing.

## API

### firstName(gender?)

`gender` - optional. Can be either `"male"` or `"female"`

```typescript
import { firstName } from "faker-en";

const anyName = firstName(); // 50% chance of male or female

const maleName = firstName("male"); // e.g. James

const femaleName = firstName("female"); // e.g. Mary
```

### lastName()

```typescript
import { lastName } from "faker-en";

const name = lastName();
```

### fullName(gender?)

`gender` - optional. Can be either `"male"` or `"female"`

```typescript
import { fullName } from "faker-en";

const anyName = fullName(); // 50% chance of male or female

const maleName = fullName("male"); // e.g. Christiano Ronaldo

const femaleName = fullName("female"); // e.g. Emily Waters
```
