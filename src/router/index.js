export default [{
  path: '/',
  name: 'root-1',
  component (resolve) { require(['../views/Home'], resolve) },
  meta: { scrollToTop: true }
}]
