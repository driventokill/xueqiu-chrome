chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.sendMessage(tab.id, {"method": "getSelection"}, function(response) {
                var popurl = 'http://xueqiu.com/service/share?url='+tab.url+'&title='+tab.title+'&content='+response.data;
                chrome.windows.create({'url': popurl,
                        'width': 650,
                        'height': 400,
                        'type': 'popup'
                    });

            });

    });

