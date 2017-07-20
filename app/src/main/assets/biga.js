/**
 * @author nummolt.com (c)2012 Maurici Carbó
 */

function Perfil(nom,alt,ample,area,pes,Ixx,Iyy)
{
this.m_nom=nom;
this.m_alt=parseFloat(alt);
this.m_ample=parseFloat(ample);
this.m_area=parseFloat(area);
this.m_pes=parseFloat(pes);
this.m_Ixx=parseFloat(Ixx);
this.m_Iyy=parseFloat(Iyy);
}

Profiles=new Object(111);

//-----------------------NOM----ALTcm--AMPLEcm--AREAcm2-PES_kg-Ixx_cm4--Iyy_cm4-----
Profiles[0]=new Perfil("IPN-80","8.0","4.2","7.58","5.95","77.8","6.29");
Profiles[1]=new Perfil("IPE-80","8.0","4.6","7.64","6","80.1","8.49");

Profiles[2]=new Perfil("IPE-100","10.0","5.5","10.30","8.10","171.0","15.90");
Profiles[3]=new Perfil("IPN-100","10.0","5.0","10.60","8.32","171.0","12.20");

Profiles[4]=new Perfil("IPE-120","12.0","6.4","13.20","10.40","316.0","27.70");
Profiles[5]=new Perfil("IPN-120","12.0","5.8","14.20","11.20","328.0","21.50");

Profiles[6]=new Perfil("IPE-140","14.0","7.3","16.40","12.9","541.0","44.90");
Profiles[7]=new Perfil("IPN-140","14.0","6.6","18.30","14.4","573.0","35.20");

Profiles[8]=new Perfil("IPE-160","16.0","8.2","20.10","15.80","869.0","68.3");
Profiles[9]=new Perfil("IPN-160","16.0","7.4","22.80","17.90","935.0","54.70");

Profiles[10]=new Perfil("IPE-180","18.0","9.1","23.90","18.8","1317.0","101.0");
Profiles[11]=new Perfil("IPN-180","18.0","8.2","27.90","21.9","1450.0","81.30");

Profiles[12]=new Perfil("IPE-200","20.0","10.0","28.50","22.40","1943.0","142.00");
Profiles[13]=new Perfil("IPN-200","20.0","9.0","33.50","26.30","2140.0","117.00");

Profiles[14]=new Perfil("IPE-220","22.0","11.0","33.40","26.20","2772.0","205.00");
Profiles[15]=new Perfil("IPN-220","22.0","9.8","39.60","31.10","3060.0","162.20");

Profiles[16]=new Perfil("IPE-240","24.0","12.0","39.10","30.70","3892.0","284.00");
Profiles[17]=new Perfil("IPN-240","24.0","10.6","46.10","36.20","4250.0","221.00");

Profiles[18]=new Perfil("IPN-260","26.0","11.3","53.40","41.90","5740.0","288.00");
Profiles[19]=new Perfil("IPE-270","27.0","13.50","45.90","36.10","5790.0","420.00");

Profiles[20]=new Perfil("IPN-280","28.0","11.9","61.10","48.00","7590.0","364.00");

Profiles[21]=new Perfil("IPE-300","30.0","15.0","53.80","42.20","8356.0","604.00");
Profiles[22]=new Perfil("IPN-300","30.0","12.5","69.10","54.20","9800.0","451.00");

Profiles[23]=new Perfil("IPE-330","33.0","16.0","62.60","49.10","11770.0","788.00");
Profiles[24]=new Perfil("IPN-320","32.0","13.1","77.80","61.10","12510.0","555.00");

Profiles[25]=new Perfil("IPN-340","34.0","13.7","86.80","68.10","15700.0","674.00");

Profiles[26]=new Perfil("IPE-360","36.0","17.0","72.7","57.1","16270.0","1043.00");
Profiles[27]=new Perfil("IPN-360","36.0","14.3","97.10","76.20","19610.0","818.00");

Profiles[28]=new Perfil("IPN-380","38.0","14.9","107.00","84.00","24010.0","975.00");

Profiles[29]=new Perfil("IPE-400","40.0","18.0","84.50","66.3","23130.0","1318.00");
Profiles[30]=new Perfil("IPN-400","40.0","15.5","118.00","92.60","29210.0","1160.00");

Profiles[31]=new Perfil("IPE-450","45.0","19.0","98.80","77.60","33740.0","1676.00");
Profiles[32]=new Perfil("IPN-450","45.0","17.0","147.00","115.00","45850.0","1730.00");

Profiles[33]=new Perfil("IPE-500","50.0","20.0","116.00","90.70","48200.0","2142.00");
Profiles[34]=new Perfil("IPN-500","50.0","18.5","180.00","141.00","68740.0","2480.00");

Profiles[35]=new Perfil("IPE-550","55.0","21.0","134.00","106.00","67120.0","2668.00");
Profiles[36]=new Perfil("IPN-550","55.0","20.0","213.00","167.00","99180.0","3490.00");

Profiles[37]=new Perfil("IPE-600","60.0","22.0","156.00","122.00","92080.0","3387.00");
Profiles[38]=new Perfil("IPN-600","60.0","21.5","254.00","199.00","139000.0","4670.00");


//---------------------------------ALT----AMPLE---AREA---PES---Ixx------Iyy-----

Profiles[39]=new Perfil("HEA-100","9.6","10.0","21.2","16.7","349.0","134.0");
Profiles[40]=new Perfil("HEB-100","10.0","10.0","26.0","20.4","450.0","167.0");
Profiles[41]=new Perfil("HEM-100","12.0","10.6","53.2","41.8","1143.0","399.0");

Profiles[42]=new Perfil("HEA-120","11.4","12.0","25.3","19.9","606.0","231.0");
Profiles[43]=new Perfil("HEB-120","12.0","12.0","34.0","26.7","864.0","318.0");
Profiles[44]=new Perfil("HEM-120","14.0","12.6","66.4","52.1","2018.0","703.0");

Profiles[45]=new Perfil("HEA-140","13.3","14.0","31.4","24.7","1033.0","389.0");
Profiles[46]=new Perfil("HEB-140","14.0","14.0","43.0","33.7","1509.0","550.0");
Profiles[47]=new Perfil("HEM-140","16.0","14.6","80.6","63.2","3291.0","1144.0");

Profiles[48]=new Perfil("HEA-160","15.2","16.0","38.8","30.4","1673.0","616.0");
Profiles[49]=new Perfil("HEB-160","16.0","16.0","54.3","42.6","2492.0","889.0");
Profiles[50]=new Perfil("HEM-160","18.0","16.6","97.1","76.2","5098.0","1759.0");

Profiles[51]=new Perfil("HEA-180","17.1","18.0","45.3","35.5","2510.0","925.0");
Profiles[52]=new Perfil("HEB-180","18.0","18.0","65.3","51.2","3831.0","1363.0");
Profiles[53]=new Perfil("HEM-180","20.0","18.6","113.3","88.9","7483.0","2580.0");

Profiles[54]=new Perfil("HEA-200","19.0","20.0","53.8","42.3","3692.0","1336.0");
Profiles[55]=new Perfil("HEB-200","20.0","20.0","78.1","61.3","5696.0","2003.0");
Profiles[56]=new Perfil("HEM-200","22.0","20.6","131.1","103","10642.0","3651.0");

Profiles[57]=new Perfil("HEA-220","21.0","22.0","64.3","50.50","5410.0","1955.0");
Profiles[58]=new Perfil("HEB-220","22.0","22.0","91.0","71.5","8091.0","2843.0");
Profiles[59]=new Perfil("HEM-220","24.0","22.6","149.4","117.0","14605.0","5012.0");

Profiles[60]=new Perfil("HEA-240","23.0","24.0","76.8","60.3","7763.0","2769.0");
Profiles[61]=new Perfil("HEB-240","24.0","24.0","106.0","83.2","11259.0","3923.0");
Profiles[62]=new Perfil("HEM-240","27.0","24.8","199.6","157.2","24289.0","8153.0");

Profiles[63]=new Perfil("HEA-260","25.0","26.0","86.6","68.2","10455.0","3668.0");
Profiles[64]=new Perfil("HEB-260","26.0","26.0","118.4","93.0","14919.0","5135.0");
Profiles[65]=new Perfil("HEM-260","29.0","26.8","219.6","172.0","31307.0","10449.0");

Profiles[66]=new Perfil("HEA-280","27.0","28.0","97.3","76.4","13673.0","4763.0");
Profiles[67]=new Perfil("HEB-280","28.0","28.0","131.4","103.0","19270.0","6595.0");
Profiles[68]=new Perfil("HEM-280","31.0","28.8","240.2","189.0","39547.0","13163.0");

Profiles[69]=new Perfil("HEA-300","29.0","30.0","112.5","88.3","18263.0","6310.0");
Profiles[70]=new Perfil("HEB-300","30.0","30.0","149.1","117.0","25166.0","8563.0");
Profiles[71]=new Perfil("HEM-300","34.0","31.0","303.1","238.0","59201.0","19403.0");

Profiles[72]=new Perfil("HEA-320","31.0","30.0","124.4","97.6","22928.0","6985.0");
Profiles[73]=new Perfil("HEB-320","32.0","30.0","161.3","127.0","30823.0","9239.0");
Profiles[74]=new Perfil("HEM-320","35.9","30.9","312.0","245.0","68135.0","19709.0");

Profiles[75]=new Perfil("HEA-340","33.0","30.0","133.5","105.0","27693.0","7436.0");
Profiles[76]=new Perfil("HEB-340","34.0","30.0","170.9","134.0","36656.0","9690.0");
Profiles[77]=new Perfil("HEM-340","37.7","30.9","315.8","248.0","76372.0","19711.0");

Profiles[78]=new Perfil("HEA-360","35.0","30.0","142.8","112.0","33090.0","7887.0");
Profiles[79]=new Perfil("HEB-360","36.0","30.0","180.6","142.0","43193.0","10141.0");
Profiles[80]=new Perfil("HEM-360","39.5","30.8","318.8","250.0","84867.0","19522.0");

Profiles[81]=new Perfil("HEA-400","39.0","30.0","159.0","125.0","45069.0","8564.0");
Profiles[82]=new Perfil("HEB-400","40.0","30.0","197.8","155.0","57680.0","10819.0");
Profiles[83]=new Perfil("HEM-400","43.2","30.7","325.8","256.0","104119.0","19335.0");

Profiles[84]=new Perfil("HEA-450","44.0","30.0","178.0","140.0","63722.0","9465.0");
Profiles[85]=new Perfil("HEB-450","45.0","30.0","218.0","171.0","79887.0","11721.0");
Profiles[86]=new Perfil("HEM-450","47.8","30.7","335.4","263.0","131484.0","19339.0");

Profiles[87]=new Perfil("HEA-500","49.0","30.0","197.5","155.0","86975.0","10367.0");
Profiles[88]=new Perfil("HEB-500","50.0","30.0","238.6","187.0","107176.0","12624.0");
Profiles[89]=new Perfil("HEM-500","52.4","30.6","344.3","270.0","161929.0","19155.0");

Profiles[90]=new Perfil("HEA-550","54.0","30.0","211.8","166.0","111932.0","10819.0");
Profiles[91]=new Perfil("HEB-550","55.0","30.0","254.1","199.0","136691.0","13077.0");
Profiles[92]=new Perfil("HEM-550","57.2","30.6","354.4","278.0","197984.0","19158.0");

Profiles[93]=new Perfil("HEA-600","59.0","30.0","226.6","178.0","141208.0","11271.0");
Profiles[94]=new Perfil("HEB-600","60.0","30.0","270.0","212.0","171041.0","13530.0");
Profiles[95]=new Perfil("HEM-600","62.0","30.5","363.7","285.0","237447.0","18975.0");


Profiles[96]=new Perfil("HEA-650","64.0","30.0","241.6","190.0","175178.0","11724.0");
Profiles[97]=new Perfil("HEB-650","65.0","30.0","286.3","225.0","210616.0","13984.0");
Profiles[98]=new Perfil("HEM-650","66.8","30.5","373.7","293.0","281667.0","18979.0");

Profiles[99]=new Perfil("HEA-700","69.0","30.0","260.5","204.0","215301.0","12179.0");
Profiles[100]=new Perfil("HEB-700","70.0","30.0","306.4","241.0","258888.0","14441.0");
Profiles[101]=new Perfil("HEM-700","71.6","30.4","383.0","301.0","329278.0","18797.0");


Profiles[102]=new Perfil("HEA-800","79.0","30.0","285.8","224.0","304442.0","12639.0");
Profiles[103]=new Perfil("HEB-800","80.0","30.0","334.2","262.0","359083.0","14904.0");
Profiles[104]=new Perfil("HEM-800","81.4","30.3","404.3","317.0","442598.0","18627.0");


Profiles[105]=new Perfil("HEA-900","89.0","30.0","320.5","252.0","422075.0","13547.0");
Profiles[106]=new Perfil("HEB-900","90.0","30.0","371.3","291.0","494065.0","15816.0");
Profiles[107]=new Perfil("HEM-900","91.0","30.2","423.6","333.0","570434.0","18452.0");

Profiles[108]=new Perfil("HEA-1000","99.0","30.0","346.8","272.0","553846.0","14004.0");
Profiles[109]=new Perfil("HEB-1000","100.0","30.0","400.0","314.0","664748.0","16275.0");
Profiles[110]=new Perfil("HEM-1000","100.8","30.2","442.2","349.0","722299.0","18459.0");

function magnify(concepte,aixo,unitat){
	//alert("magnify");
	var cartelletObj=document.getElementById("magnified");
	cartelletObj.style.display="block";
	cartelletObj.firstChild.innerHTML=concepte+": <br>"+aixo.firstChild.nodeValue+" "+unitat;
}
function magnifyOut(){
	var cartelletObj=document.getElementById("magnified");
	cartelletObj.style.display="none";
}


function entraDades(){
	//alert("Hola");
	
	var selectIpxObj=document.getElementById("selperfils");
	var selectedIpx=selectIpxObj.selectedIndex;
	var ipxList=selectIpxObj.options;
	//alert(selectedIpx);
	var ipxName=ipxList[selectedIpx].value;/////////////////////////////////////////////////////////////////////////DADA
	var showipx=document.getElementById("showipx");
	var selectedBeamObject=Profiles[selectedIpx];
	//alert(showipx);
	showipx.textContent=ipxName;
	var selectxxyyObj=document.getElementById("selxxyy");
	var selectedXxYy=selectxxyyObj.selectedIndex;///////////////////////////////////////////////////////////////////DADA
	if(selectedXxYy==0){
	document.body.style.backgroundImage="url('beamx.png')";	
	}else{
	document.body.style.backgroundImage="url('beamy.png')";	
	}
//	var selectSteelObj=document.getElementById("steelstuff");
//	var steelStuff=selectSteelObj.options[selectSteelObj.selectedIndex].value;
	//alert(steelStuff);
	var beamlongmObj=document.getElementById("sellongm");
	var beamlongcmObj=document.getElementById("sellongcm");
	var beamlongm=beamlongmObj.options[beamlongmObj.selectedIndex].value;
	var beamlongcm=beamlongcmObj.options[beamlongcmObj.selectedIndex].value;
	var beamlong=parseInt(beamlongm)+parseFloat(beamlongcm/100);////////////////////////////////////////////////////DADA
	var L=beamlong;
	var showlongbeamObj=document.getElementById("showlongbeam");
	if(beamlongcm<10){
	showlongbeamObj.textContent=""+beamlongm+".0"+beamlongcm+" m.";
	}else{
	showlongbeamObj.textContent=""+beamlongm+"."+beamlongcm+" m.";	
	}
	//alert(beamlong);
	var showheightbeam=document.getElementById("showheightbeam");
	var showwidthbeam=document.getElementById("showwidthbeam");
	var h=0;////////////////////////////////////////////////////////////////////////////////////////////////DADA
	var i=0;/////////////////////////////////////////////////////////////////////////////////////////////////////////DADA
	if(selectedXxYy==0){
	showheightbeam.textContent=selectedBeamObject.m_alt+" cm.";
	h=selectedBeamObject.m_alt;//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	i=selectedBeamObject.m_Ixx;
	showwidthbeam.textContent=selectedBeamObject.m_ample+" cm.";
	}else{
	showheightbeam.textContent=selectedBeamObject.m_ample+" cm.";	
	h=selectedBeamObject.m_ample;//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	i=selectedBeamObject.m_Iyy;
	showwidthbeam.textContent=selectedBeamObject.m_alt+" cm.";
	}
	var showload=document.getElementById("showload");
	var beamloadtObj=document.getElementById("selloadtons");
	var beamloadkgObj=document.getElementById("selloadkg");
	var weightt=parseFloat(beamloadtObj[beamloadtObj.selectedIndex].value);
	var weightkg=parseInt(beamloadkgObj[beamloadkgObj.selectedIndex].value);
	var weightmAction=weightt*1000+weightkg ;////////////////////////////////////////////////DADA
	var weightmCalcul=weightmAction+selectedBeamObject.m_pes ;
	showload.textContent=""+weightmCalcul+" Kg/m.";
	var P=weightmCalcul*L;
	var selMajoracioObj=document.getElementById("selmajoracio");
	var j=parseFloat(selMajoracioObj.options[selMajoracioObj.selectedIndex].value);/////////////////DADA
	var k=selectedBeamObject.m_pes+weightmAction*j;
	var weightmMajorat=selectedBeamObject.m_pes+(Math.floor(weightt*1000+weightkg)*j*1000)/1000;////DADA
	//alert(weightmCalcul+" "+weightmMajorat);
	var showResultsObj=document.getElementById("showresults");	
	var showCaractersObj=document.getElementById("caracters");
	var textCaracters="";
	textCaracters+="<label>"+selectedBeamObject.m_nom+" - ";
	if(selectedXxYy==0){
		textCaracters+="Vertical ";
	}else{
		textCaracters+="Horitzontal ";
	}
	var selSteelStuffObj=document.getElementById("steelstuff");
	var steelType=selSteelStuffObj.options[selSteelStuffObj.selectedIndex].text;
	var steelLimit=parseFloat(selSteelStuffObj.options[selSteelStuffObj.selectedIndex].value);
	var T=k*L/2;
	var M=(1/8)*k*L*L;
	var t=100*M*(h/2)/i;
	var Lt=steelLimit/1.25;
	var txtSegCalcul="0";
	var segCalcul=0;
	if(t==0){
		txtSegCalcul="infinita";
		segCalcul=100000000;
	}else{
		txtSegCalcul=" "+(Math.floor((Lt/t)*100)/100);
		segCalcul=Lt/t;
	}
	var E=2100000;
	var F=(5/384)*(((selectedBeamObject.m_pes+weightmAction)/100)*L*L*L*L*100000000)/(E*i);
	var f=0;
	var ftext="";
	if(F>0.00001){
		f=(L*100)/F;
		ftext="1/"+Math.floor(f);
	}else{
		f=100000000;
		ftext="NO"
	}
	textCaracters+="- Acer: "+ steelType;
	textCaracters+=" - Limit El&agrave;stic: "+steelLimit+" Kg/cm2";
	showCaractersObj.innerHTML=textCaracters;
	var textSolucio="<table class=\"taula\">"; 
	textSolucio+="<tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>Pes propi</td><td><div class=\"pixels100\">p</div></td><td class=\"overgrow\"><label id=\"pesmid\" class=\"right\">"+selectedBeamObject.m_pes+"</label></td><td><div class=\"pixels50\">Kg/m</div></td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>C&agrave;rrega linial:</td><td>c</td><td class=\"overgrow\"><label id=\"carlinid\" class=\"right\">"+weightmAction+"</label></td><td>Kg/m</td>";
	textSolucio+="<tr>";
	textSolucio+="<td>Longitud:</td><td>L</td><td class=\"overgrow\"><label id=\"longid\" class=\"right\">"+L+"</label></td><td>m</td>";
	textSolucio+="</tr>";
	textSolucio+="</tr>";
	textSolucio+="<td>Pes total:</td><td>P=(p+c)*L</td><td class=\"overgrow\"><label id=\"pesid\" class=\"right\">"+Math.floor(P*100)/100+"</label></td><td>Kg.</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>Reaccions als recolzaments:</td><td>R=P/2</td><td class=\"overgrow\"><label id=\"reactid\" class=\"right\">"+Math.floor((P/2)*100)/100+"</label></td><td>Kg.</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>Coeficient de majoraci&oacute;:</td><td>j</td><td class=\"overgrow\"><label id=\"mjid\" class=\"right\">"+j+"</label></td><td></td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>C&agrave;rrega de càlcul:</td><td>k=p+c*j</td><td class=\"overgrow\"><label id=\"kcalcid\" class=\"right\">"+Math.floor(k*100)/100+"</label></td><td>kg/m</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>In&egrave;rcia del perfil:</td><td>i</td><td class=\"overgrow\"><label id=\"inid\" class=\"right\">"+i+"</label></td><td><label class=\"microframe\">cm</label><label class=\"micro\">4</label></td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>Altura del perfil:</td><td>h</td><td class=\"overgrow\"><label id=\"altid\" class=\"right\">"+h+"</label></td><td>cm</td>";
	textSolucio+="</tr>";	
	textSolucio+="<tr>";
	textSolucio+="<td>Tallant m&agrave;xim:</td><td>T=k*L/2</td><td class=\"overgrow\"><label id=\"tallid\" class=\"right\">"+Math.floor((T)*100)/100+"</label></td><td>kg</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>Moment m&agrave;xim:</td><td>M=(1/8)*k*L&sup2;</td><td class=\"overgrow\"><label id=\"momid\" class=\"right\">"+Math.floor(M*100)/100+"</label></td><td>Kg*m</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>L&iacute;mit el&agrave;stic de c&agrave;lcul:</td><td >Lt=LimEl&nbsp;/1.25</td><td class=\"overgrow\"><label id=\"limid\" class=\"right\">"+Math.floor(Lt*100)/100+"</label></td><td>kg/cm&sup2;</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	if(Lt>t){
	textSolucio+="<td>Tensio m&agrave;xima per flexi&oacute;</td><td>t=100*M*(h/2)*i</td><td class=\"overgrow\"><label id=\"tensid\" class=\"right\">"+Math.floor((t)*100)/100+"</label></td><td>kg/cm&sup2;</td>";	
	}else{
	textSolucio+="<td><label class=\"red\">Tensio m&agrave;xima per flexi&oacute;</label></td><td class=\"overgrow\"><label class=\"red\">t=100*M*(h/2)*i</label></td><td><label class=\"right\"><label id=\"tensid\" class=\"red\">"+Math.floor((t)*100)/100+"</label></label></td><td><label class=\"red\">kg/cm&sup2;</label></td>";
	}
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	if(segCalcul>1){
	textSolucio+="<td>Seguretat:</td><td>Lt/t</td><td class=\"overgrow\"><label id=\"segid\" class=\"right\">"+txtSegCalcul+"</label></td><td>&nbsp;</td>";
	}else{
	textSolucio+="<td><label class=\"red\">Seguretat:</label></td><td class=\"overgrow\"><label class=\"red\">Lt/t</label></td><td><label id=\"segid\" class=\"right red\">"+txtSegCalcul+"</label></td><td>&nbsp;</td>";	
	}
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	textSolucio+="<td>Fletxa:</td><td><label class=\"micro2\">F=(5/384)*(p+c)*L</label><label class=\"micro\">4</label><label class=\"micro2\">/(E*i)</label></td><td class=\"overgrow\"><label id=\"flid\" class=\"right\">"+((Math.floor(F*100))/100)+"</label></td><label class=\"right\"></label><td>cm</td>";
	textSolucio+="</tr>";
	textSolucio+="<tr>";
	
	if(f<300){
		textSolucio+="<td><label class=\"rosa4\">Fletxa relativa:</label></td><td><label class=\"rosa4\">f=L/F</label></td><td class=\"overgrow\"><label id=\"flrelid\" class=\"right rosa4\">"+ftext+"</label></td><td></td>";	
	}
	if((f>=300)&&(f<400)){
		textSolucio+="<td><label class=\"rosa3\">Fletxa relativa:</label></td><td><label class=\"rosa3\">f=L/F</label></td><td class=\"overgrow\"><label id=\"flrelid\" class=\"right rosa3\">"+ftext+"</label></td><td></td>";	
	}		
	if((f>=400)&&(f<500)){
		textSolucio+="<td><label class=\"rosa2\">Fletxa relativa:</label></td><td><label class=\"rosa2\">f=L/F</label></td><td class=\"overgrow\"><label id=\"flrelid\" class=\"right rosa2\">"+ftext+"</label></td><td></td>";	
	}	
	if((f>=500)&&(f<1000)){
		textSolucio+="<td><label class=\"rosa1\">Fletxa relativa:</label></td><td><label class=\"rosa1\">f=L/F</label></td><td class=\"overgrow\"><label id=\"flrelid\" class=\"right rosa1\">"+ftext+"</label></td><td></td>";	
	}	
	if(f>=1000){
		textSolucio+="<td>Fletxa relativa:</td><td>f=L/F</td><td class=\"overgrow\"><label id=\"flrelid\" class=\"right\">"+ftext+"</label></td><td></td>";
	}
	
	textSolucio+="</tr>";
	textSolucio+="</table>";
	showResultsObj.innerHTML=textSolucio;

	document.getElementById("pesmid").onmousedown=function(){magnify("Pes propi",this,"Kg/m");};
	document.getElementById("carlinid").onmousedown=function(){magnify("Càrrega linial",this,"Kg/m");};
	document.getElementById("longid").onmousedown=function(){magnify("Longitud",this,"m");};
	document.getElementById("pesid").onmousedown=function(){magnify("Pes total",this,"Kg");};
	document.getElementById("reactid").onmousedown=function(){magnify("Reaccions als recolzaments",this,"Kg");};
	document.getElementById("mjid").onmousedown=function(){magnify("Coeficient de majoració",this,"");};
	document.getElementById("kcalcid").onmousedown=function(){magnify("Càrrega de càlcul",this,"Kg/m");};
	document.getElementById("inid").onmousedown=function(){magnify("Inèrcia del perfil",this,"cm4");};
	document.getElementById("altid").onmousedown=function(){magnify("Altura del perfil",this,"cm");};
	document.getElementById("tallid").onmousedown=function(){magnify("Tallant màxim",this,"Kg");};
	document.getElementById("momid").onmousedown=function(){magnify("Moment màxim",this,"Kg*m");};
	document.getElementById("limid").onmousedown=function(){magnify("Límit elàstic de càlcul",this,"Kg/cm2");};
	document.getElementById("tensid").onmousedown=function(){magnify("Tensió màxima per flexió",this,"Kg/cm2");};
	document.getElementById("segid").onmousedown=function(){magnify("Seguretat",this,"");};
	document.getElementById("flid").onmousedown=function(){magnify("Fletxa",this,"cm");};
	document.getElementById("flrelid").onmousedown=function(){magnify("Fletxa relativa",this,"");};
	magnifyOut();
}




function init(){

	var selllibre=document.getElementById("selperfils");
	for (var opt=0;opt<111;opt++){
		var option=document.createElement("option");
		option.text=Profiles[opt].m_nom;
		option.value=Profiles[opt].m_nom;
	try
	  {
	  // for IE earlier than version 8
	  selllibre.add(option,selllibre.options[null]);
	  }
	catch (e)
	  {
	  selllibre.add(option,null);
	  }	
	}
	var sellongm=document.getElementById("sellongm");
	for (var opt=0;opt<100;opt++){
		var option=document.createElement("option");
		option.text=opt+" m.";
		option.value=opt;
	try
	  {
	  // for IE earlier than version 8
	  sellongm.add(option,sellongm.options[null]);
	  }
	catch (e)
	  {
	  sellongm.add(option,null);
	  }		
	}
	var sellongcm=document.getElementById("sellongcm");
	for (var opt=0;opt<100;opt++){
		var option=document.createElement("option");
		option.text=opt+" cm.";
		option.value=opt;
	try
	  {
	  // for IE earlier than version 8
	  sellongcm.add(option,sellongcm.options[null]);
	  }
	catch (e)
	  {
	  sellongcm.add(option,null);
	  }		
	}
	var selloadtons=document.getElementById("selloadtons");
	for (var opt=0;opt<1000;opt++){
		var option=document.createElement("option");
		option.text=""+opt/10+" T/m.";
		option.value=""+opt/10;
	try
	  {
	  // for IE earlier than version 8
	  selloadtons.add(option,selloadtons.options[null]);
	  }
	catch (e)
	  {
	  selloadtons.add(option,null);
	  }		
	}
	var selloadkg=document.getElementById("selloadkg");
	for (var opt=0;opt<100;opt++){
		var option=document.createElement("option");
		option.text=""+opt+" Kg/m.";
		option.value=""+opt;
	try
	  {
	  // for IE earlier than version 8
	  selloadkg.add(option,selloadkg.options[null]);
	  }
	catch (e)
	  {
	  selloadkg.add(option,null);
	  }		
	}
entraDades();
}










