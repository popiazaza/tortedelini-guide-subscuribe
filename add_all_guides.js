(function()
{
	if( location.href.match( /^https:\/\/steamcommunity\.com\/id\/0825771\/myworkshopfiles\/?/ ) === null )
	{
		alert( 'Please run this on Torte de Lini\'s guide page: https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30' );

		window.location = 'https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30';

		return;
	}
	
	var guideList = ["1187563935","1187551178","1187546268","1127042830","898788847","895968997","817387228","817380197","750410650","750406868","688715106","576978688","576975639","434659379","391458050","381725812","359580647","356791078","344512092","344511398","334021836","330545830","319111870","319109248","319106719","319101948","319092835","319092788","319085962","309919893","301735208","301732264","286904891","286895078","286891439","269700420","261777247","254615876","251982939","251941747","251934276","232946791","232415624","232367327","232338429","222265746","222264754","222262678","203428546","203428541","195052251","195048794","176984007","165334812","161358226","159698040","143243384","143016376","140111731","134962374","129403206","129402805","129402256","129400942","129400559","129400259","129399862","129399377","129381491","129334727","129332786","129332354","129331714","129323738","129204328","129193377","129191918","129157199","129149991","129143802","129137630","129134687","129130896","129119115","129111538","129109889","129107725","129105276","129102427","129100110","129098268","129096483","129093311","129085778","129083818","129081331","129081035","129079469","129076227","129072324","129069615","129067853","129065509","129064094","129063701","129062086","129060054","129056935","128972272","128960249","128956358","128945163","128937771","128932114","128929132","128927319","128925332","128922664","128920907","128918471","128917369","128914193","128912519","128909765","128906539","128903691","128899869","128898296","128895761","128891336","128887479","128882317","128876778","128873254","128871463","128866569","128862386","128858659","128855291","128851981","128757681","128756420","128754907","128753951","128752632","128751287","128748151","128746588","128745244","128743885","128742802","128741319","128735861","128734250","128732275","128730475","128728638","128726494"];
	
	var i = 0,
	    loaded = 0,
	    package = 0,
	    total = guideList.length,
	    modal = ShowBlockingWaitDialog( 'Executing…',
	    	'Please wait until all requests finish. Ignore all the errors, let it finish.' );
	
	for( ; i < total; i++ )
	{
		guideid = guideList[ i ];
		
		jQuery.post(
			'//steamcommunity.com/sharedfiles/subscribe',
			{
				appid: 570,
				id: guideid,
				sessionid: g_sessionID
			}
		).always( function( )
			{
				loaded++;
				
				modal.Dismiss();
				
				if( loaded >= total )
				{
					location.reload();
				}
				else
				{
					modal = ShowBlockingWaitDialog( 'Executing…',
						'Loaded <b>' + loaded + '</b>/' + total + '.' );
				}
			}
		);
	}
}());
