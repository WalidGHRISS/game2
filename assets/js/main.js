console.log("Welcome to Snake Game");console.log("contact: ghrisswalid@hotmail.fr");console.log(" ************ \n");var jouerId=null;var score=0;var temps=0;var vitesse=0;var nbrCase=800;var direction_0="droite";var direction="droite";var pauseEtat=false;var continuerEtat=false;var boutonControleEtat=false;var accidentEtat=false;var sonEtat=true;var son_demarage=document.getElementById("demarage");var son_marche=document.getElementById("marche");var son_accident=document.getElementById("accident");var son_manger=document.getElementById("manger");var body=document.getElementById("snake");var largeurFenetre=parseFloat(getComputedStyle(body).width);var hauteurFenetre=parseFloat(getComputedStyle(body).height);console.log('Screen width:',largeurFenetre);console.log('Screen height:',hauteurFenetre);var cadre_du_jeu=document.getElementById("cadre_du_jeu");var largeurCadre=parseFloat(getComputedStyle(cadre_du_jeu).width);var hauteurCadre=parseFloat(getComputedStyle(cadre_du_jeu).height);var form=document.querySelector("form");var niveauDeJeu=form.niveaux.value;var stage=form.stages.value;var tableauScore1=document.getElementById("tableau_score_1");function screenModified(){largeurFenetre=parseFloat(getComputedStyle(body).width);hauteurFenetre=parseFloat(getComputedStyle(body).height);if(largeurFenetre>700&&largeurFenetre<=1024){nbrCase=600;} else if(largeurFenetre<=700){nbrCase=200;} else{nbrCase=800;} if(largeurFenetre>=600&&largeurFenetre<=700){document.getElementById("parametres_02").appendChild(tableauScore1);document.getElementById("cadre_option_02").style.display="block";} else{document.getElementById("parametres").appendChild(tableauScore1);document.getElementById("cadre_option_02").style.display="none";}} window.addEventListener("resize",screenModified);screenModified();supprimerCadreOption();var xNbrCase=50;var yNbrCase=30;var penteXY=5/3;var largeurCase=20;var hauteurCase=20;var largeurCasePr=0;var hauteurCasePr=0;largeurCadre=parseFloat(getComputedStyle(cadre_du_jeu).width);hauteurCadre=parseFloat(getComputedStyle(cadre_du_jeu).height);penteXY=largeurCadre/hauteurCadre;yNbrCase=Math.sqrt(nbrCase/penteXY);xNbrCase=penteXY*yNbrCase;yNbrCase=Math.round(yNbrCase);xNbrCase=Math.round(xNbrCase);largeurCase=largeurCadre/xNbrCase;hauteurCase=hauteurCadre/yNbrCase;largeurCasePr=100/xNbrCase;hauteurCasePr=100/yNbrCase;console.log('largeurCadre:',largeurCadre);console.log('hauteurCadre:',hauteurCadre);console.log('penteXY:',penteXY);console.log('xNbrCase:',xNbrCase);console.log('yNbrCase:',yNbrCase);console.log('nbrCase:',xNbrCase*yNbrCase);console.log('largeurCase:',largeurCase);console.log('hauteurCase:',hauteurCase);console.log('largeurCasePr:',largeurCasePr);console.log('hauteurCasePr:',hauteurCasePr);console.log(' ***************');afficherCadreOption();var obstaclesStage_2=document.getElementById("obstaclesStage_2");obstaclesStage_2.style.width=(Math.round(0.3*xNbrCase)*largeurCasePr)+"%";obstaclesStage_2.style.height=(Math.round(0.2*yNbrCase)*hauteurCasePr)+"%";obstaclesStage_2.style.left=(Math.round(0.35*xNbrCase)*largeurCasePr)+"%";obstaclesStage_2.style.top=(Math.round(0.4*yNbrCase)*hauteurCasePr)+"%";var souris=document.getElementById("souris");var xSouris=10*largeurCasePr;var ySouris=0;souris.style.left=xSouris+"%";souris.style.top=ySouris+"%";souris.style.width=largeurCasePr+"%";souris.style.height=hauteurCasePr+"%";console.log('xSouris:',xSouris,"%");console.log('ySouris:',ySouris,"%");xSouris=parseFloat(getComputedStyle(souris).left);ySouris=parseFloat(getComputedStyle(souris).top);console.log('xSouris:',xSouris);console.log('ySouris:',ySouris);function initialiserSouris(){xSouris=10*largeurCasePr;ySouris=0;souris.style.left=xSouris+"%";souris.style.top=ySouris+"%";} var serpentsRotation=[0,0,0,0];var serpents=[document.getElementById("serpent_0"),document.getElementById("serpent_1"),document.getElementById("serpent_2"),document.getElementById("serpent_3")];function initialiserSerpent(){var max=serpents.length;for(var i=4;i<max;i++){document.getElementById("cadre_du_jeu").removeChild(serpents[i]);} serpents=[document.getElementById("serpent_0"),document.getElementById("serpent_1"),document.getElementById("serpent_2"),document.getElementById("serpent_3")];serpentsRotation=[0,0,0,0];serpents[0].style.left=(3*largeurCasePr)+"%";serpents[0].style.top="0";serpents[1].style.left=(2*largeurCasePr)+"%";serpents[1].style.top="0";serpents[2].style.left=(largeurCasePr)+"%";serpents[2].style.top="0";serpents[3].style.left="0";serpents[3].style.top="0";for(var i=0;i<4;i++){serpents[i].style.width=largeurCasePr+"%";serpents[i].style.height=hauteurCasePr+"%";serpents[i].style.transform="rotate(0deg)";}} initialiserSerpent();document.addEventListener("keypress",function(e){if(e.charCode===49){direction="gauche";} else if(e.charCode===50){direction="bas";} else if(e.charCode===51){direction="droite";} else if(e.charCode===53){direction="haut";} else if(e.charCode===32&&pauseEtat===true){faireUnePause("clavier");} else if(e.charCode===32&&continuerEtat===true){continuerAJouer("clavier");}});if(largeurFenetre<=1024){var leftDirection=document.getElementById("left_direction");var topDirection=document.getElementById("top_direction");var rightDirection=document.getElementById("right_direction");var bottomDirection=document.getElementById("bottom_direction");var pauseButton=document.getElementById("pause_button");leftDirection.addEventListener("click",function(){direction="gauche";});topDirection.addEventListener("click",function(){direction="haut";});rightDirection.addEventListener("click",function(){direction="droite";});bottomDirection.addEventListener("click",function(){direction="bas";});pauseButton.addEventListener("click",function(){faireUnePause("bouton");});} document.getElementById("stages").addEventListener("change",function(){choisirStage();});var pause=document.createElement("input");pause.setAttribute("type","button");pause.setAttribute("id","pause");pause.setAttribute("value","pause");document.getElementById("boutonPermuttable").appendChild(pause);document.getElementById("boutonPermuttable").removeChild(pause);pause.addEventListener("click",function(){faireUnePause("bouton");});var continuer=document.createElement("input");continuer.setAttribute("type","button");continuer.setAttribute("id","continuer");continuer.setAttribute("value","continuer");document.getElementById("boutonPermuttable").appendChild(continuer);document.getElementById("boutonPermuttable").removeChild(continuer);continuer.addEventListener("click",function(){continuerAJouer("bouton");});var barreBoutonsControles=document.createElement("p");barreBoutonsControles.setAttribute("id","barreBoutonsControles");barreBoutonsControles.innerHTML+='<p>-> à gauche : 1<p/>';barreBoutonsControles.innerHTML+='<p>-> en bas : 2<p/>';barreBoutonsControles.innerHTML+='<p>-> à droite : 3<p/>';barreBoutonsControles.innerHTML+='<p>-> en haut : 5<p/>';barreBoutonsControles.innerHTML+='<p>-> pause : espace<p/>';document.getElementById("barreControle").appendChild(barreBoutonsControles);document.getElementById("barreControle").removeChild(barreBoutonsControles);var jouer=document.getElementById("jouer");jouer.addEventListener("click",function(){commencerAJouer();});var quitter=document.getElementById("quitter");quitter.addEventListener("click",function(){quitterLeJeu();});var mal=document.getElementById("controle");mal.addEventListener("click",function(){affichageDeBarreDeCrontrole();});var son=document.getElementById("son");son.addEventListener("click",function(){permutterLeSon();});function commencerAJouer(){supprimerCadreOption();initialiserSerpent();choisirNiveauDeJeu();initialiserSouris();if(sonEtat){son_demarage.play();} clearInterval(jouerId);score=-1;calculerScore();temps=0;direction_0="droite";direction="droite";jouerId=setInterval(deplacerLeSerpent,vitesse);pauseEtat=true;document.getElementById("boutonPermuttable").replaceChild(pause,jouer);supprimerLeformulaire();afficherAccident("supprimer");} function choisirNiveauDeJeu(){niveauDeJeu=form.niveaux.value;if(niveauDeJeu==="facile"){vitesse=400} if(niveauDeJeu==="normale"){vitesse=200} if(niveauDeJeu==="difficile"){vitesse=100}} function choisirStage(){stage=form.stages.value;if(stage==="stage_1"){obstaclesStage_2.style.display="none";} if(stage==="stage_2"){obstaclesStage_2.style.display="block";}} function faireUnePause(nature){afficherCadreOption();if(boutonControleEtat){boutonControleEtat=false;var x=document.getElementById("barreControle");x.removeChild(barreBoutonsControles);} pauseEtat=false;continuerEtat=true;document.getElementById("boutonPermuttable").replaceChild(continuer,pause);clearInterval(jouerId);} function continuerAJouer(nature){supprimerCadreOption();continuerEtat=false;pauseEtat=true;document.getElementById("boutonPermuttable").replaceChild(pause,continuer);direction=direction_0;jouerId=setInterval(deplacerLeSerpent,vitesse);} function permutterLeSon(){var x=document.getElementById("image_audio");if(sonEtat){sonEtat=false;x.setAttribute("src","./assets/images/audio_off.jpg");} else{sonEtat=true;x.setAttribute("src","./assets/images/audio_on.jpg");}} function affichageDeBarreDeCrontrole(){var x=document.getElementById("barreControle");if(boutonControleEtat){boutonControleEtat=false;x.removeChild(barreBoutonsControles);} else{boutonControleEtat=true;x.appendChild(barreBoutonsControles);}} function quitterLeJeu(){pauseEtat=false;continuerEtat=false;document.getElementById("boutonPermuttable").innerHTML="";document.getElementById("boutonPermuttable").appendChild(jouer);clearInterval(jouerId);afficherLeFormulaire();} function deplacerCorpSerpent(){var max=serpents.length-1;var x=0;var y=0;for(var i=max;i>=1;i--){x=parseFloat(getComputedStyle(serpents[i-1]).left);y=parseFloat(getComputedStyle(serpents[i-1]).top);x=Math.round(x/largeurCase)*largeurCasePr+"%";y=Math.round(y/hauteurCase)*hauteurCasePr+"%";serpents[i].style.left=x;serpents[i].style.top=y;serpents[i].style.transform="rotate("+serpentsRotation[i-1]+"deg)";serpentsRotation[i]=serpentsRotation[i-1];}} function deplacerLeSerpent(){var xPosition=parseFloat(getComputedStyle(serpents[0]).left);var yPosition=parseFloat(getComputedStyle(serpents[0]).top);var xPositionCase=Math.round(xPosition/largeurCase);var yPositionCase=Math.round(yPosition/hauteurCase);deplacerCorpSerpent();if(((direction==="droite"&&direction_0!=="gauche")||(direction==="gauche"&&direction_0==="droite"))&&largeurCadre-xPosition-largeurCase>2) {direction_0="droite";serpents[0].style.left=(xPositionCase+1)*largeurCasePr+"%";serpents[0].style.transform="rotate(0deg)";serpentsRotation[0]=0;} else if(((direction==="gauche"&&direction_0!=="droite")||(direction==="droite"&&direction_0==="gauche"))&&xPosition>2){direction_0="gauche";serpents[0].style.left=(xPositionCase-1)*largeurCasePr+"%";serpents[0].style.transform="rotate(180deg)";serpentsRotation[0]=180;} else if(((direction==="bas"&&direction_0!=="haut")||(direction==="haut"&&direction_0==="bas"))&&hauteurCadre-yPosition-hauteurCase>2){direction_0="bas";serpents[0].style.top=(yPositionCase+1)*hauteurCasePr+"%";serpents[0].style.transform="rotate(90deg)";serpentsRotation[0]=90;} else if(((direction==="haut"&&direction_0!=="bas")||(direction==="bas"&&direction_0==="haut"))&&yPosition>2){direction_0="haut";serpents[0].style.top=(yPositionCase-1)*hauteurCasePr+"%";serpents[0].style.transform="rotate(-90deg)";serpentsRotation[0]=-90;} else if(((direction==="droite"&&direction_0!=="gauche")||(direction==="gauche"&&direction_0==="droite"))&&largeurCadre-xPosition-largeurCase<2){direction_0="droite";serpents[0].style.left="0";serpents[0].style.transform="rotate(0deg)";serpentsRotation[0]=0;} else if(((direction==="gauche"&&direction_0!=="droite")||(direction==="droite"&&direction_0==="gauche"))&&xPosition<2){direction_0="gauche";serpents[0].style.left=(xNbrCase-1)*largeurCasePr+"%";serpents[0].style.transform="rotate(180deg)";serpentsRotation[0]=180;} else if(((direction==="bas"&&direction_0!=="haut")||(direction==="haut"&&direction_0==="bas"))&&hauteurCadre-yPosition-hauteurCase<2){direction_0="bas";serpents[0].style.top="0";serpents[0].style.transform="rotate(90deg)";serpentsRotation[0]=90;} else if(((direction==="haut"&&direction_0!=="bas")||(direction==="bas"&&direction_0==="haut"))&&yPosition<2){direction_0="haut";serpents[0].style.top=(yNbrCase-1)*hauteurCasePr+"%";serpents[0].style.transform="rotate(-90deg)";serpentsRotation[0]=-90;} verifierManger();verifierEchec();calculerTemps();if(sonEtat){son_marche.play();}} function verifierManger(){var xPositionSerpent=parseFloat(getComputedStyle(serpents[0]).left);var yPositionSerpent=parseFloat(getComputedStyle(serpents[0]).top);xSouris=parseFloat(getComputedStyle(souris).left);ySouris=parseFloat(getComputedStyle(souris).top);if(Math.abs(xPositionSerpent-xSouris)<2&&Math.abs(yPositionSerpent-ySouris)<2){agrandirSerpent();calculerScore();positionnerSouris();}} function agrandirSerpent(){if(sonEtat){son_manger.play();} var xPosition=0;var yPosition=0;var serpentPlus=document.createElement("div");serpentPlus.setAttribute("id","serpent_"+serpents.length);serpentPlus.setAttribute("class","snake_design");serpentPlus.style.width=largeurCasePr+"%";serpentPlus.style.height=hauteurCasePr+"%";xPosition=parseFloat(getComputedStyle(serpents[2]).left);yPosition=parseFloat(getComputedStyle(serpents[2]).top);serpentPlus.style.left=Math.round(xPosition/largeurCase)*largeurCasePr+"%";serpentPlus.style.top=Math.round(yPosition/hauteurCase)*hauteurCasePr+"%";document.getElementById("cadre_du_jeu").appendChild(serpentPlus);serpents[serpents.length]=serpentPlus;} function calculerScore(){score++;document.getElementById("score").textContent="Score: "+score+" pts";document.getElementById("score_2").textContent="Score: "+score+" pts";} function verifierEchec(){var echec=0;var max=serpents.length;var xPositionTete=parseFloat(getComputedStyle(serpents[0]).left);var yPositionTete=parseFloat(getComputedStyle(serpents[0]).top);for(var i=1;i<max;i++){var xPositionSerpent=parseFloat(getComputedStyle(serpents[i]).left);var yPositionSerpent=parseFloat(getComputedStyle(serpents[i]).top);if(Math.abs(xPositionSerpent-xPositionTete)<2&&Math.abs(yPositionSerpent-yPositionTete)<2){echec=1;}} stage=form.stages.value;if(stage==="stage_2"){var xMin=parseFloat(getComputedStyle(obstaclesStage_2).left);var yMin=parseFloat(getComputedStyle(obstaclesStage_2).top);var xMax=xMin+parseFloat(getComputedStyle(obstaclesStage_2).width);var yMax=yMin+parseFloat(getComputedStyle(obstaclesStage_2).height);if(xPositionTete+2>xMin&&xPositionTete+2<xMax&&yPositionTete+2>yMin&&yPositionTete+2<yMax){echec=1;}} if(echec!==0){faireEchec();}} function faireEchec(){console.log("************ \n Game over ! \n************ \n");clearInterval(jouerId);if(sonEtat){son_accident.play();} pauseEtat=false;continuerEtat=false;document.getElementById("boutonPermuttable").innerHTML="";document.getElementById("boutonPermuttable").appendChild(jouer);jouer.value="rejouer";afficherAccident("afficher");afficherCadreOption();if(boutonControleEtat){boutonControleEtat=false;var x=document.getElementById("barreControle");x.removeChild(barreBoutonsControles);}} function positionnerSouris(){var verificationA=0;var verificationB=1;var max=serpents.length;var xPositionSerpent=parseFloat(getComputedStyle(serpents[0]).left);var yPositionSerpent=parseFloat(getComputedStyle(serpents[0]).top);while(verificationA!==verificationB){verificationB=verificationA;xSouris=largeurCase*Math.trunc(Math.random()*xNbrCase);ySouris=hauteurCase*Math.trunc(Math.random()*yNbrCase);for(var i=0;i<max;i++){xPositionSerpent=parseFloat(getComputedStyle(serpents[i]).left);yPositionSerpent=parseFloat(getComputedStyle(serpents[i]).top);if(xPositionSerpent<xSouris+5&&xPositionSerpent>xSouris-5&&yPositionSerpent<ySouris+5&&yPositionSerpent>ySouris-5){verificationB++;}} stage=form.stages.value;if(stage==="stage_2"){var xMin=parseFloat(getComputedStyle(obstaclesStage_2).left);var yMin=parseFloat(getComputedStyle(obstaclesStage_2).top);var xMax=xMin+parseFloat(getComputedStyle(obstaclesStage_2).width);var yMax=yMin+parseFloat(getComputedStyle(obstaclesStage_2).height);if(xSouris>xMin-5&&xSouris<xMax+1&&ySouris>yMin-5&&ySouris<yMax+5){verificationB++;}}} souris.style.left=(100*xSouris/largeurCadre)+"%";souris.style.top=(100*ySouris/hauteurCadre)+"%";console.log('xSouris:',xSouris);console.log('ySouris:',ySouris);} function calculerTemps(){temps++;var minutes=0;var secondes=0;minutes=Math.trunc((temps*vitesse/1000)/60);secondes=Math.trunc(temps*vitesse/1000)%60;document.getElementById("temps").textContent="Temps: "+minutes+":"+secondes+" s";document.getElementById("temps_2").textContent="Temps: "+minutes+":"+secondes+" s";} function supprimerLeformulaire(){document.getElementById("formulaires").innerHTML="";} function afficherLeFormulaire(){document.getElementById("formulaires").appendChild(form);} function afficherAccident(x){if(x==="afficher"&&accidentEtat===false){accidentEtat=true;document.getElementById("img_accident").style.display="block";} else if(x==="supprimer"&&accidentEtat===true){accidentEtat=false;document.getElementById("img_accident").style.display="none";}} function supprimerCadreOption(){cadre_du_jeu.style.borderWidth="5px";document.getElementById("cadre_du_jeu").style.width="100%";document.getElementById("snake").style.borderWidth="10px";document.getElementById("cadre_option").style.display="none";if(largeurFenetre>=600&&largeurFenetre<=700){document.getElementById("cadre_option_02").style.display="none";} document.getElementById("header_1").style.display="none";document.getElementById("header_2").style.display="flex";if(largeurFenetre<=1024){document.getElementById("manette").style.display="block";}} function afficherCadreOption(){var x1=parseFloat(getComputedStyle(cadre_du_jeu).width);var y1=parseFloat(getComputedStyle(cadre_du_jeu).height);document.getElementById("cadre_du_jeu").style.width="85%";document.getElementById("snake").style.borderWidth="15px";document.getElementById("cadre_option").style.display="block";if(largeurFenetre>=600&&largeurFenetre<=700){document.getElementById("cadre_option_02").style.display="block";} document.getElementById("header_1").style.display="block";document.getElementById("header_2").style.display="none";if(largeurFenetre<=1024){document.getElementById("manette").style.display="none";} var x2=parseFloat(getComputedStyle(cadre_du_jeu).width);var y2=parseFloat(getComputedStyle(cadre_du_jeu).height);var changer=(y2-(y1*x2/x1))/2+5;cadre_du_jeu.style.borderTopWidth=changer+"px";cadre_du_jeu.style.borderBottomWidth=changer+"px";}