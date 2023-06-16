var myFunc01 = function() {
    var rep = 10; //for loop
    var i = 0;
    while (i < rep) {
        (function(i) {
            setTimeout(function() {
                setTimeout(function() {
                    const buttonall = document.getElementsByClassName('x1i10hfl x9f619 xggy1nq x1s07b3s x1ypdohk x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r x1w3u9th x1a2a7pz xexx8yu x4uap5 x18d9i69 xkhd6sd x10l6tqk x17qophe x13vifvy xh8yej3');
                    for (let j = 0; j < buttonall.length; j++) {
                        buttonall[j].click();
                    }
                    setTimeout(function() {
                        var trash = document.querySelector('[aria-label="Trash"]');
                        trash.click();
                        setTimeout(function() {
                            var moveToTrash = document.querySelector('[aria-label="Move to trash"]');
                            moveToTrash.click();
                        }, 1000);

                    }, 2000);

                }, 8000)
            }, 15000 * i)
        })(i++)
    }
};

myFunc01();
