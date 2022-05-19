let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';document.getElementById('i58fd5').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i58fd5")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('i28hlp').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i28hlp")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('isfxi7').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("isfxi7")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('ipbhmr').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ipbhmr")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('iacmxc').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iacmxc")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('ir6wd').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ir6wd")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('i3oro').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i3oro")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};document.getElementById('itaum').onclick = (event) => {
    event.preventDefault();
    let productId = window.location.pathname.replace('/Dashboard/','');
      if(productId === '/Dashboard' || productId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("itaum")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            productId = value._id;
            parentId = key;
          }
        });
      }
    apiProductApi.deleteproduct( productId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/Dashboard' ;}}});};window.onload = () => {apiProductApi.getAllproduct((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iv3vc").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pImage']");
if(insideSubDataElement !== null && data[data.length -i -1].pImage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].pImage.data;
  insideSubDataElement.name = data[data.length -i -1].pImage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'pImage' && data[data.length -i -1].pImage !== undefined){
  subDataElements[i].src = data[data.length -i -1].pImage.data;
  subDataElements[i].name = data[data.length -i -1].pImage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pTitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pTitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pTitle'){
        subDataElements[i].textContent = data[data.length -i -1].pTitle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'pCount']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].pCount;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'pCount'){
        subDataElements[i].textContent = data[data.length -i -1].pCount;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};