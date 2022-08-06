import { GreetProps } from './Greet.types'

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : 'Guest'}</div>
}
