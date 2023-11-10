sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ashish/app/purchaseorderapp/test/integration/FirstJourney',
		'ashish/app/purchaseorderapp/test/integration/pages/POsList',
		'ashish/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'ashish/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ashish/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);