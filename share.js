chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.sendMessage(tab.id, {"method": "getSelection"}, function(response) {
                var e = encodeURIComponent;
                var popurl = 'http://xueqiu.com/service/share?url='+e(tab.url)+'&title='+e(tab.title)+'&content='+e(response.data);
                chrome.windows.create({'url': popurl,
                        'width': 650,
                        'height': 400,
                        'type': 'popup'
                    });

            });

    });

