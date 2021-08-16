# React Control Flows

`Switch` and `If` for React.js

# Usage

## Switch conditional render based on multiple values
Like normal Switch Case, Switch read value from a component, Case define the condition, if the value is matching the expression's value to a Case clause, the element decleared in the Case would be executed, otherwise return the element decleared in the Default clause (if Default is defined).

## Switch

| Prop     | Type             | Required | Description                                                                                                  |
| -------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| values   | `string`         | `yes`    | variable to be compared to render child `Case` Component                                                     |
| children | `Case Component` | `yes`    | Component to be rendered when a match is found between `Case`'s `value` prop and the `Switch`'s `value` prop |

---

## Case

| Prop     | Type                     | Required | Description                                                                           |
| -------- | ------------------------ | -------- | ------------------------------------------------------------------------------------- |
| value    | `string`                 | `yes`    | determines if children should be rendered based on match with `Switch`'s `value` prop |
| children | `element`                | `yes`    | elements to be rendered                                                               |

---

## Default (optional)

| Prop     | Type                     | Required | Description             |
| -------- | ------------------------ | -------- | ----------------------- |
| children | `element`                | `yes`    | elements to be rendered |

```ts.
export enum Day {
  Monday = 'MONDAY'
  Saturday = 'SATURDAY'
  Sunday = 'SUNDAY'
}
  
  
import { Switch, Case, Default } from 'react-control-router'

<Switch value = {Day}>
  <if value = 'MONDAY'>
    <div>HappyMonday</div>
  </if>
</Switch>

<Switch value = {Day}>
  <Case value = 'SATURDAY'>
  <div>Saturday</div>
  </Case>
  <Case value = 'SUNDAY'>
  <div>Sunday</div>
  </Case>
  <Default>
  <div>WeekDay</div>
  </Default>
</Switch>
```

## if conditional render based on certain values
If conditional is true, children element decleared in the Props would be rendered.
| Prop       | Type      | Required         | Description                                                                                             |
| ---------- | --------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| if         | `boolean` | `yes`            | determines if prop `children` should be rendered                                                        |
| children   | `element` | `yes`            | JSX element to be rendered should `if` be true                                                          |
| condition  | `string`  | `yes`            | Use determine if conditional rendering                                                                  |

```ts.
  
import { If } from 'react-control-router'


  <If value = 'MONDAY'>
    <div>HappyMonday</div>
  </If>


```

## Author

React control flow is authored by Victor Teo.

## License

MIT License

Copyright (c) 2021 Fillmula Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

