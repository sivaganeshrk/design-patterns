import { Singleton } from './singleton';

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
  console.log(`Singleton Works`);
} else {
  console.log(`Singleton Not Works`);
}
