<?php


$body = [
    "trackings" => [
        [
            "metadata" => [
                "generatedAt" => "2023-03-03T01:23:34.445Z"
            ],
            "tracker" => [
                "trackerId" => "271cea63-072b-4d31-b13d-33200f386d18",
                "trackingNumber" => "6545646456464",
                "shipmentReference" => "c6e4fef4-a816-b68f-4024-3b7e4c5a9f81"
            ],
            "shipment" => [
                "shipmentId" => "e583cbe2-736d-cbb9-44c9-a91f29a25fbb",
                "statusCode" => "delivery_delivered",
                "statusCategory" => "delivery",
                "statusMilestone" => "delivered",
                "originCountryCode" => "CN",
                "destinationCountryCode" => "US",
                "trackingNumbers" => [
                    [
                        "tn" => "6545646456464"
                    ],
                    [
                        "tn" => "ALT-TN-SAMPLE1"
                    ]
                ],
                "recipient" => [
                    "name" => "John Doe",
                    "address" => "12515 Research Blvd",
                    "postCode" => "78738",
                    "city" => "Austin",
                    "subdivision" => "TX"
                ],
                "delivery" => [
                    "estimatedDeliveryDate" => "2021-04-27T15:09:00.000Z",
                    "service" => "UPS Global",
                    "signedBy" => "John Doe"
                ]
            ],
            "events" => [
                [
                    "eventId" => "98653334-7f74-91a6-4d48-ccbceb4fde8c",
                    "status" => "Delivered in mailbox",
                    "location" => "AUSTIN, TX 78738",
                    "occurrenceDatetime" => "2021-04-27T15:09:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => "delivery_delivered",
                    "statusCategory" => "delivery",
                    "statusMilestone" => "delivered"
                ],
                [
                    "eventId" => "066310b6-fb0b-3186-4ed1-d04bd19d8622",
                    "status" => "Out for Delivery, Expected Delivery by 5:15pm.",
                    "location" => "AUSTIN, TX 78738",
                    "occurrenceDatetime" => "2021-04-27T06:10:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => "delivery_out_for_delivery",
                    "statusCategory" => "delivery",
                    "statusMilestone" => "out_for_delivery"
                ],
                [
                    "eventId" => "2f990d85-b5e3-46a6-4968-70e8c8589d45",
                    "status" => "Arrived at Post Office",
                    "location" => "AUSTIN, TX 78734",
                    "occurrenceDatetime" => "2021-04-26T19:39:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "dc142904-d9c2-c181-4e1a-2f79ba3247b9",
                    "status" => "Accepted at USPS Destination Facility",
                    "location" => "AUSTIN, TX 78734",
                    "occurenceDatetime" => "2021-04-26T18:24:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "2354cbdb-cd10-bfbc-40ff-f1769ffa6dd5",
                    "status" => "In transit - Inbound",
                    "location" => "HOUSTON,TX 77073",
                    "occurrenceDatetime" => "2021-04-23T00:50:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "8b63883d-e6f9-d99b-4263-07ebc01429e0",
                    "status" => "Arrived Shipping Partner Facility, USPS Awaiting Item",
                    "location" => "HOUSTON, TX 77073",
                    "occurrenceDatetime" => "2021-04-23T00:50:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "b9ce1ef5-6ebc-9a87-466f-5ed777c1c9de",
                    "status" => "Distribution center - Outbound",
                    "location" => "GRAND PRAIRIE,TX 75050",
                    "occurrenceDatetime" => "2021-04-22T00:57:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "64110085-e3e4-059e-4944-60e279cc93fd",
                    "status" => "Destination Country - Arrival",
                    "location" => "TX-Grand Prairie",
                    "occurrenceDatetime" => "2021-04-21T15:09:54",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => "destination_arrival",
                    "statusCategory" => "destination",
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "94615d34-7469-0d82-4fd4-be4cca2be288",
                    "status" => "International shipment release - Import",
                    "location" => "USA",
                    "occurenceDatetime" => "2021-04-18T00:00:00",
                    "order" => 2,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "478f06ef-82c9-94a3-4d1c-d058cd4b9249",
                    "status" => "Port of destination - Arrival",
                    "location" => "USA",
                    "occurrenceDatetime" => "2021-04-18T00:00:00",
                    "order" => 1,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "ALT-TN-SAMPLE1",
                    "sourceCode" => "ups-tracking",
                    "courierCode" => "ups",
                    "statusCode" => "destination_arrival",
                    "statusCategory" => "destination",
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "70b1f08e-1ceb-9980-4f85-a3bb48c8a4a4",
                    "status" => "Port of departure - Departure",
                    "location" => "China",
                    "occurrenceDatetime" => "2021-04-18T00:30:00",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "6545646456464",
                    "sourceCode" => "yanwen-api-tracking",
                    "courierCode" => "yanwen",
                    "statusCode" => null,
                    "statusCategory" => null,
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "ca2fe5b9-aa9b-858e-40bf-2da168f7ece6",
                    "status" => "China facility - Outbound",
                    "location" => "China sorting warehouse",
                    "occurrenceDatetime" => "2021-04-17T03:36:37",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "6545646456464",
                    "sourceCode" => "yanwen-api-tracking",
                    "courierCode" => "yanwen",
                    "statusCode" => null,
                    "statusCategory" => "transit",
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "89c65b0e-4226-03b6-4326-bebcbd0b0647",
                    "status" => "China Pickup scan",
                    "location" => "China",
                    "occurrenceDatetime" => "2021-04-16T13:40:20",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "6545646456464",
                    "sourceCode" => "yanwen-api-tracking",
                    "courierCode" => "yanwen",
                    "statusCode" => null,
                    "statusCategory" => "transit",
                    "statusMilestone" => "in_transit"
                ],
                [
                    "eventId" => "914fe29d-ac9d-22a0-44f2-a9d4584e375b",
                    "status" => "Order confirmed",
                    "location" => null,
                    "occurrenceDatetime" => "2021-04-16T10:11:32",
                    "order" => null,
                    "trackingNumber" => "6545646456464",
                    "eventTrackingNumber" => "6545646456464",
                    "sourceCode" => "yanwen-api-tracking",
                    "courierCode" => "yanwen",
                    "statusCode" => "data_order_created",
                    "statusCategory" => "data",
                    "statusMilestone" => "info_received"
                ]
            ],
            "statistics" => [
                "timestamps" => [
                    "infoReceivedDatetime" => "2021-04-16T10:11:32",
                    "inTransitDatetime" => "2021-04-16T13:40:20",
                    "outForDeliveryDatetime" => "2021-04-27T06:10:00",
                    "failedAttemptDatetime" => null,
                    "availableForPickupDatetime" => null,
                    "exceptionDatetime" => null,
                    "deliveredDatetime" => "2021-04-27T15:09:00"
                ]
            ]
        ]
    ]
];
