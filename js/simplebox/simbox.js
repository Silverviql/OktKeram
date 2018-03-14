
    (function(){
        var boxes=[],els,i,l;
        if(document.querySelectorAll){
            els=document.querySelectorAll('a[rel=simplebox]');
            Box.getStyles('js/simplebox/simplebox_css','js/simplebox/simplebox.css');
            Box.getScripts('js/simplebox/simplebox_js','js/simplebox/simplebox.js',
                function(){
                    simplebox.init();
                    for(i=0,l=els.length;i<l;++i)
                        simplebox.start(els[i]);
                    simplebox.start('a[rel=simplebox_group]');
                });
        }
    })();
