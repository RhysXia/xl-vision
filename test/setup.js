// if (typeof window !== 'undefined') {
//   // global.window.resizeTo = (width, height) => {
//   //   global.window.innerWidth = width || global.window.innerWidth;
//   //   global.window.innerHeight = height || global.window.innerHeight;
//   //   global.window.dispatchEvent(new Event('resize'));
//   // };
//   // global.window.scrollTo = () => {};
//   global.window = {}
// }


const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })