var gat = (function () {

	var _;
    var q = "qwertyuiopasdfghjkl;zxcvbnm,./QWERTYUIOPASDFGHJKL:ZXCVBNM<>?";
    var n = ";,.kyfgclzaoeiudrtsnpqjhxbmwv/:<>KYFGCLZAOEIUDRTSNPQJHXBMWV?";
    var inited = false;
    var neo = {};
    
    // 188
    
	function init(id){
        _ = document.getElementById(id);
        _.addEventListener("keydown", keyFilter, false);
	}
    
    function qwerty2neo(key){
        if ( !inited ) {
            for (var i = 0; i < q.length; ++i ) {
                neo[q[i]]=n[i];
            }
            inited = true;
        }
        return neo[key] || '?';
    }
    
	function keyFilter(e){

		var c = !e.shiftKey
              ? String.fromCharCode(e.keyCode).toLowerCase()
              : String.fromCharCode(e.keyCode);
        console.log({"c":c,"k":String.fromCharCode(e.keyCode)});

        if ( e.ctrlKey || c === ' ' ) {
            key = '';
            return false;
        }
        
        if ( q.contains(c) ) {
            _.value = _.value + qwerty2neo(c);
            e.preventDefault();
        } else {
            console.log({"e.keyCode":e.keyCode});
        }
        return false;
    }

    return {
        init: init,
    };
})();