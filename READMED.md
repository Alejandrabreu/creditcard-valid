**Validación de tarjeta de crédito.**

+ Creación de un prompt para el ingreso del nro de tarjeta de crédito.

+ Variable *"creditNum"* para almacenar el serial que ingrese el usuario final.

+ Se inicia una función *"isValidCard"* para incovarla.

+ variable *"creditNumSplit"* para almacenar el serial introducido anteriormente, pero esta vez en un array [separado], para luego usar esta variable para aplicarle la inversión de orden.

+ variable *"credArr"* se declara para guardar el cambio que se produjo en el array *"creditNumSplit"*, es decir, el arrreglo ya invertido para que mantenga la modificación.

+ *"For"* aplicado para recorrer la longitud del último indice hacia el primero, de la variable *"creditNum"* e invertir su orden.

+ luego se aplica un *"push*" en el que toma el indice [i] de *"creditNumSplit"* y lo coloca al inicio del *"credArr"*.

+ Variable *"serialParNum"* guarda los números que están en indices pares.

+ Variable *"invertSerial"* con los números de la tarjeta invertidos.

+ *"For"* que recorre el largo del serial ya invertido.

+ Acá intentaba armar mi idea de solo hacer operaciones matemáticas con los números de indice par, con *"serialParNum.reverse();
if (invertSerial.n%2 ===0){"*

--..pero no lo supe reflejar..--

      #######                                     #########
      #######                                  #############
      #######                                #################
      #######                              #####################
      #######                            ########        #########
      #######                          #########        ############
      #######                         ##########        #############
      #######                        #################################
      #######                        #################################
      #######                        ###########          ############
      #######                        ###########          ############
      #######                        ###########          ############
      #######         ############   ###########          ############
      ############################   ###########          ############
      ############################   ###########          ############
