const  turnOn  =  document . getElementById  (  'turnOn'  ) ;
const  turnOff  =  document . getElementById  (  'turnOff'  ) ;
 lâmpada  const =  documento . getElementById  (  'lamp'  ) ;

function  isLampBroken  ( )  {
     lâmpada de retorno . src . indexOf  (  'quebrada'  )  >  - 1
}

função  lampOn  ( )  {
    if  ( ! isLampBroken  ( )  )  {
        lâmpada . src  =  './img/ligada.jpg' ;
    }
}

function  lampOff  ( )  {
    if  ( ! isLampBroken  ( )  )  {
        lâmpada . src  =  './img/desligada.jpg' ;
    }
}

function  lampBroken  ( )  {
    lâmpada . src  =  './img/quebrada.jpg' ;
}

turnOn . addEventListener  (  'clique' ,  lampOn  ) ;
TurnOff . addEventListener  (  'click' ,  lampOff  ) ;
lâmpada . addEventListener  (  'mouseover' ,  lampOn  ) ;
lâmpada . addEventListener  (  'mouseleave' ,  lampOff  ) ;
lâmpada . addEventListener  (  'dblclick' ,  lampBroken  ) ;