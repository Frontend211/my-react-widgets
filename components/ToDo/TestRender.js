import {memo} from 'react';

export default memo(function TestRender(){
  console.log('TEST-RENDER');
  return <fieldset>
    <legend>&lt;TestRender / &gt;</legend>
  </fieldset>;
});

// import {PureComponent} from 'react';
// export default class TestRender extends PureComponent {
//     render(){
//         console.log('TEST-RENDER');
//         return <fieldset><legend>&lt;TestRender / &gt;</legend></fieldset>
//     }
// }