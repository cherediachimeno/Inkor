<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<style>
    .tela{
max-width: 800px;
    width: 800px;
    height: 500px;
    background-color: white;
    margin: 0 auto;
}


.pokemon {
   height: 374px;
    width: 800px;
    max-width: 800px;
	z-index:0;
	position: relative;
	top:0;
	animation: mover 2s infinite linear;
}

.parafuso-cabeca{
background-color: #545a5f;
    position: relative;
    height: 90px;
    right: 14px;
    width: 50px;
    max-width: 36px;
    margin: 0 auto;
    z-index: 900;
    /* border-bottom: #677076 2px solid; */
    top: 10px;
    box-shadow: 0 12px 23px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.nervoso{
height: 62px;
    width: 31px;
    position: relative;
    border-bottom: #4c5359 4px solid;
    /* max-width: 50px; */
    margin: 0 auto;
    z-index: 9000000;
    border-radius: 50px;
    top: 360px;
    right: 35px;
    transform: rotateY(37deg);
	display: none;
}

.cabeca-parafuso-cabeca{
    right: 14px;
       top: 23px;
    position: relative;
    height: 35px;
    overflow: hidden;
    width: 100px;
    max-width: 90px;
    margin: 0 auto;
    z-index: 901;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom: #303539 5px solid;
    transform: rotateX(35deg);
    box-shadow: 0 123px 18px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #69767e;
}

.parafuso-cabeca-furo{
	position: absolute;
    background-color: #545a5f;
    width: 43px;
    height: 10px;
    border-radius: 16px;
    left: -4px;
    box-shadow: inset 0 3px 5px #585f66;
    transform: rotate3d(4, -4, 2, -29deg);
    border-bottom: 3px #333536 solid;
}

.furo-vazio{
width: 0px;
    top: -15px;
  position: relative;
    left: -14px;
    z-index: 8000 !important;
    background-color: white;
    transform: rotate(90deg);
    border-radius: 10px !important;
}

.cabeca{
	height: 200px;
    width: 200px;
	position: relative;
    max-width: 300px;
    margin: 0 auto;
    background-color: rgb(100, 106, 110);
    border-radius: 50%;
    border-bottom: rgba(171, 166, 166, 0.77) 6px solid;
    transform: rotate(-209deg);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
	z-index:4;
	top: 0px;
/*	 */
}

@-webkit-keyframes mover {
  0 {
    top:0;
  }
  50% {
    top:25px
  }
  100% {
    top:0;
  }
}


.cabeca::before {
    height: 75px;
    content: "";
    width: 75px;
    padding-top: -12px;
    /* max-width: 300px; */
    /* margin: 0 auto; */
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    /* border-top: rgba(255, 255, 255, 0.05) 15px solid; */
    /* transform: rotate(-32deg); */
    box-shadow: 0 167px 68px 0 #90b3cf, 0 0 0px 0 rgba(0, 0, 0, 0.19);
    top: -84px;
    left: 27px;
    /* top: -201px; */
}

.cabeca::after {
    height: 75px;
    content: "";
    width: 75px;
    padding-top: -12px;
    /* max-width: 300px; */
    /* margin: 0 auto; */
    position: absolute;
    background-color: transparent;
    border-radius: 50%;
    /* border-top: rgba(255, 255, 255, 0.05) 15px solid; */
    /* transform: rotate(-32deg); */
    box-shadow: 0 167px 48px 0 #4d555b, 0 0 20px 0 #90b3cf;
    top: -84px;
    left: 122px;

}

.olho {
    
    height: 85px;
    width: 85px;
    background-color: #d7d7d7;
    border-radius: 50%;
    border: #2f383f 3px solid;
    /* transform: rotate3d(-86,22,144,65deg); */
    top: 65px;
    left: 96px;
    z-index: 5;
    position: relative;
}

.pingo{
position: relative;
    height: 7px;
    width: 7px;
    background-color: #4c5359;
    top: 33px;
    right: -36px;
    border-radius: 50%;
	z-index:6;
	animation: mecher-olho 10s infinite linear;
}

@-webkit-keyframes mecher-olho{
	10% {
		top:46px;
	}
	
	50%{
		top:46px;
	}
	
	60%{
		top: 33px;
	}
	
	70%{
		top:20px;
	}
	
	90%{
		top:20px;
	}
	
	100%{
		top:33;
	}
}


.ima {
    position: relative;
    height: 170px;
    width: 120px;
	overflow: hidden;
    background: radial-gradient(#7e95a7 20%, #5d809c 20%, #646a6e 60%);
    /* background-color: #646a6e; */
    /* border-top-left-radius: 50%; */
    border-top-left-radius: 35%;
    border-top-right-radius: 35%;
    border-left: #353238 0px solid;
	border-right: #353238 0px solid;
    box-shadow: 0 -20px 16px 0 rgba(0, 0, 0, 0.2), 0 -37px 64px 0 rgba(0, 0, 0, 0.19);
	animation: girar-ima 3s infinite linear;
}

@-webkit-keyframes girar-ima{
  0 {
  border-left-width: 0px;
	border-right-width: 0px;
  
  }
  25% {
    border-left-width: 0px;
   border-right-width: 15px;
  }
  50% {
   border-left-width: 0px;
	border-right-width: 0px;
  }
  75%{
	border-left-width: 15px;
   border-right-width: 0px;
  }
  
  100%{
	border-left-width: 0px;
	border-right-width: 0px;
  }
  
  }


.direito{
	transform: rotate(-90deg);
	float: right;
}


@-webkit-keyframes girar2 {
  0 {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(-75deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

.esquerdo{
    transform: rotate(90deg);
	/*	animation: girar1 2s infinite linear; */
}

@-webkit-keyframes girar1 {
  0 {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(75deg);
  }
  100% {
    transform: rotate(90deg);
  }
}



.anim1,
.anim2{
	position: relative;
    height: 170px;
    width: 120px;
}

.anim1{
    top: -355px;
    left: 160px;
	z-index: 2;
	animation: anim1 3s infinite linear; 
}

@-webkit-keyframes anim1 {
	0%{
		transform: rotate3d(1, 0, 0, 0deg);
	}
	25%{
		transform: rotate3d(1, 0, 0, 25deg);
	}
  50%{
	transform: rotate3d(1, 0, 0, 0deg);
  }
  75%{
	transform: rotate3d(1, 0, 0, -25deg);
  }
  100% {
    transform: rotate3d(1, 0, 0, 0deg);
  }
}

.anim2{
    top: -190px;
    left: 515px;
	z-index:40;
	animation: anim2 3s infinite linear;
}

@-webkit-keyframes anim2 {
	0%{
	transform: rotate3d(1, 0, 0, 0deg);
	}
  25%{
  
		transform: rotate3d(1, 0, 0, -25deg);
  }
  50%{
  
	transform: rotate3d(1, 0, 0, 0deg);
  }
  
  75%{
	
	transform: rotate3d(1, 0, 0, 25deg);
  }
  100% {
    transform: rotate3d(1, 0, 0, 0deg);
  }
}




.sid-ima {
    position: relative;
    height: 130px;
    width: 50px;
    max-width: 50px;
    margin: 40px auto;
    border-top-left-radius: 40%;
    border-top-right-radius: 40%;
    background-color: white;
    /* padding-bottom: 22px; */
    /* border-right: #9aa0a5 1px solid; */
    /* border-right-width: 10px; */
    /* transform: rotate(180deg); */
	border-right: #353238 0px solid;
    border-left: #353238 0px solid;
	animation: girar-ima2 3s linear infinite;
	z-index:1000;
	}
	
	

.ponta-ima-azul {
    position: relative;
    height: 50px;
    width: 90px;
    left: 46px;
    top: -90px;
    background-color: #23698d;
}

.ponta-ima-vermelha {
    position: relative;
    height: 50px;
    width: 66px;
    left: 0px;
    top: -140px;
    background-color: #ca0f0f;
    border-left: #8a0606 0px solid;	
}

@-webkit-keyframes girar-ima2 {
	0%{
		border-right-width: 0px;
		border-left-width: 0px;
	}
	
	25%{
			border-right-width: 0px;
		border-left-width: 15px;
	}
	
	50%{
		border-right-width: 0px;
		border-left-width: 0px;
	}
	
	75%{
		border-right-width: 15px;
		border-left-width: 0px;
	}
	100%{
		border-right-width: 0px;
		border-left-width: 0px;
	}
}


.parafuso-direito{
	position: relative;
    top: -386px;
    height: 38px;
      display: inline-flex;
    align-items: center;
    width: 38px;
    border-radius: 50%;
    background-color: #646a6e;
    left: 407px;
    z-index: 300;
    transform: rotateY(35deg);
    box-shadow: 0 4px 8px 0 rgba(21, 19, 19, 0.78), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	overflow: hidden;
	border-right: #73838f 3px solid;
}

.parafuso-esquerdo{
	    position: relative;
    border-right: #73838f 3px solid;
    top: -424px;
 
    overflow: hidden;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: #646a6e;
    left: 300px;
    z-index: 300;
    box-shadow: 0 4px 8px 0 rgba(21, 19, 19, 0.78), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: rotatey(-35deg);
}

/*.parafuso-esquerdo a{
	transform: rotateY(40deg)!important;
}*/

.base-parafuso-esquerdo{
	position: relative;
    height: 17px;
    width: 40px;
    /* border-radius: 50%; */
    background-color: red;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 10px;
    z-index: 299;
    top: -452px;
    left: 315px;
    transform: rotatey(-35deg);
    box-shadow: inset 0 3px 5px #9E9E9E;
	background-color : #5a6065;
	overflow: hidden;
}

.giro-parafuso{
	    position: absolute;
    background-color: #585f66;
    width: 19px;
    height: 10px;
    border-radius: 16px;
    left: 12px;
    top: 3px;
    box-shadow: inset 0 3px 5px #585f66;
    transform: rotate(-75deg);
    border-bottom: 4px #333536 solid

}

.btn.chave{
	box-shadow: inset 0 3px 5px #9E9E9E;
    background-color: #353238!important;
    border-color: #353238 !important;
    position: relative;
    padding: 5px;
    text-decoration: none;
    border-radius: 15px !important;
    transform: rotate(0deg);
    width: 29px;
    left: 3px;
    animation: girar-parafuso 3s linear infinite;
}

@-webkit-keyframes girar-parafuso {
  from{
	transform: rotate(360deg);
  }
}

.funda {
    background-color: #353238 !important;
    border-color: #353238 !important;
    height: 10px;
    width: 17px;
    right: -11px;
    position: relative;
    border-radius: 50%;
    z-index: 44444444;
    top: -5px;
    transform: rotate(45deg);
}

.btn.chave::after{
	content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 1px;
    top: 0px;
   box-shadow: inset 0 3px 5px #9E9E9E;
    background-color: #353238!important;
    border-color: #353238 !important;

    border-radius: 15px !important;
    transform: rotate(90deg);

}

.balao{
	background-color: #d7d7d7;
    height: 100px;
    width: 219px;
    border-radius: 50%;
	position: relative;
    top: 150px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.balao h1{
    margin: 0 !important;
    top: 30px;
    position: relative;
}

.ponta{
height: 10px;
    width: 10px;
    background-color: #d7d7d7;
    border-radius: 50%;
    left: 215px;
    position: relative;
    top: 47px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


.acessa{
height: 45px;
    width: 33px;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    transform: rotateX(45deg);
    top: -62px;
    left: 1px;
    animation-name: acender;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@-webkit-keyframes acender {
  0 {
    background-color: rgba(233, 236, 1, 0)
  }
  50% {
    background-color: rgba(233, 236, 1, 0.67);
	box-shadow: 0px 7px 17px rgba(233, 236, 1, 0.67);
  }
  100% {
    background-color:  rgba(233, 236, 1, 0);
  }
}
</style>

</head>

<body>
  <h1>El número elegido ha sido el {{$num}}</h1>
  <p>Este es el num de la suerte: {{$suerte}}</p>
  <form action="{{ route('base') }}">
    <input type="submit" value="Volver" />
</form>
<div class="row">
            <div class="col-lg-12">
                <div class="tela">
					
					<div class="pokemon">
						<div class="nervoso"></div>
						
						<div class="cabeca-parafuso-cabeca"><a class="btn chave" style="width: 45px;top: -8px; left: 22px"></a><a class="btn furo-vazio"></a></div>
						<div class="parafuso-cabeca">
							<div class="parafuso-cabeca-furo"></div>
							<div class="parafuso-cabeca-furo" style="top: 15px;"></div>
							<div class="parafuso-cabeca-furo" style="top: 30px;"></div>
							<div class="parafuso-cabeca-furo" style="top: 45px;"></div>
							<div class="parafuso-cabeca-furo" style="top: 60px;"></div>
							<div class="parafuso-cabeca-furo" style="top: 75px;"></div>
						</div>
						<div class="cabeca">
							<div class="olho"><div class="pingo"></div></div>
						</div>
						<div class="anim2">
							<div class="ima direito">
								<div class="sid-ima"></div>
								<div class="ponta-ima-azul"></div>
								<div class="ponta-ima-vermelha"></div>
							</div>
						</div>
						<div class="anim1">
							<div class="ima esquerdo">
								<div class="sid-ima"></div>
								<div class="ponta-ima-azul"></div>
								<div class="ponta-ima-vermelha"></div>
							</div>
						</div>
						<div class="parafuso-direito"><a class="btn chave"></a></div>
						<div class="parafuso-esquerdo"><a style="top: 9px;" class="btn chave"></a></div>
						<div class="base-parafuso-esquerdo"><div class="giro-parafuso"></div><div class="giro-parafuso" style="top: 4px;left: 23px;"></div></div>
					</div>	
				</div>
            </div>
        </div>
</body>
</html>