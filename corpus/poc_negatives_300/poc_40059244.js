style = document.createElement('p').style;  
Object.defineProperty(style, 'prop', {  
  value: { toString() { style.prop = 1 } }  
}); 