// JavaScript source code

function cleanUpSpecialChars(s) {
    var r = s.toLowerCase();
    if (r.substring(0, 3).toLowerCase() == 'the') {
        r = r.substring(3)

        if (r.substring(r.length - 5).toLowerCase() == ' city') {
            r = r.substring(0, r.length - 5)
        }
    }

    if (r.substring(r.length - 4).toLowerCase() == 'city') {
        r = r.substring(0, r.length - 4)
    }

    r = r.replace("saint", "st")
    r = r.replace(new RegExp(/[Ã Ã¡Ã¢Ã£Ã¤Ã¥ÄÄƒÄ…]/g), "a");
    r = r.replace(new RegExp(/Ã§/g), "c");
    r = r.replace(new RegExp(/Ã°/g), "d");
    r = r.replace(new RegExp(/Ã¦/g), "ae");
    r = r.replace(new RegExp(/Ã¾/g), "t");
    r = r.replace(new RegExp(/Ä/g), "c");
    r = r.replace(new RegExp(/Ä‡/g), "c");
    r = r.replace(new RegExp(/[Ã¨Ã©ÃªÃ«Ä“Ä™Ä›]/g), "e");
    r = r.replace(new RegExp(/[Ã¬Ã­Ã®Ã¯Ä«Ã­Ä±]/g), "i");
    r = r.replace(new RegExp(/[Å›Å¡È™ÅŸ]/g), "s");
    r = r.replace(new RegExp(/[Å£È›]/g), "t");
    r = r.replace(new RegExp(/Ã±/g), "n");
    r = r.replace(new RegExp(/Å„/g), "n");
    r = r.replace(new RegExp(/Åˆ/g), "n");
    r = r.replace(new RegExp(/Å™/g), "r");
    r = r.replace(new RegExp(/[Ä¼Ä¾Å‚]/g), "l");
    r = r.replace(new RegExp(/Å¾/g), "z");
    r = r.replace(new RegExp(/Åº/g), "z");
    r = r.replace(new RegExp(/Ä·/g), "k");
    r = r.replace(new RegExp(/ÃŸ/g), "ss");
    r = r.replace(new RegExp(/[Ã²Ã³Ã´ÃµÃ¶á»“Ã¸ÅÅ‘Å]/g), "o");
    r = r.replace(new RegExp(/[Ã¹ÃºÃ»Ã¼Å«]/g), "u");
    r = r.replace(new RegExp(/[Ã½Ã¿]/g), "y");
    r = r.replace(new RegExp(/[Ã½Ã¿]/g), "y");
    r = r.replace(new RegExp(/[â€™'Ê¿â€˜ .,Ê»]/g), "");
    r = r.replace(new RegExp(/&/g), "");
    r = r.replace(new RegExp(/â€”/g), "");
    r = r.replace(new RegExp(/-/g), "");
    r = r.replace(new RegExp(/Ã¦/g), "ae");
    r = r.replace(new RegExp(/ÄŸ/g), "g");
    r = r.replace(new RegExp(/Ç/g), "");
    r = r.replace(new RegExp(/Ã½/g), "Ñƒ"); //Russian
    r = r.replace(new RegExp(/Ã³/g), "Ð¾"); //Russian
    r = r.replace(new RegExp(/Ð¸Ì/g), "Ð¸"); //Russian
    r = r.replace(new RegExp(/Ð¾Ì/g), "Ð¾"); //Russian
    r = r.replace(new RegExp(/Ð°Ì/g), "Ð°"); //Russian
    r = r.replace(new RegExp(/ÑƒÌ/g), "Ñƒ"); //Russian
    r = r.replace(new RegExp(/ÐµÌ/g), "Ðµ"); //Russian
    r = r.replace(new RegExp(/Ñ‹Ì/g), "Ñ‹"); //Russian
    r = r.replace(new RegExp(/ÑÌ/g), "Ñ"); //Russian
    r = r.replace(new RegExp(/ÑÌ/g), "Ñ"); //Russian
    r = r.replace(new RegExp(/ÑÌ/g), "Ñ"); //Russian
    r = r.replace(new RegExp(/ÑŽÌ/g), "ÑŽ"); //Russian
    r = r.replace(/\s*\(.*?\)\s*/g, ''); //Removes everything between brackets
    r = r.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); // trim
    r = remove_vietnamese_accents(r)
    return r;
}

function getCleanName(dirtyText) {
    var cleanText = dirtyText.replace(/\ /g, '_');
    cleanText = cleanText.replace(/[|&!;$%=@"'<>()+?,.:#]/g, "");
    cleanText = cleanText.replace("/", "");
    cleanText = cleanText.replace("/", ""); //In case there are two slashes... Do not remove!
    return cleanText;
}

function remove_vietnamese_accents(str) {
    accents_arr = new Array(
        "Ã ", "Ã¡", "áº¡", "áº£", "Ã£", "Ã¢", "áº§", "áº¥", "áº­", "áº©", "áº«", "Äƒ",
        "áº±", "áº¯", "áº·", "áº³", "áºµ", "Ã¨", "Ã©", "áº¹", "áº»", "áº½", "Ãª", "á»",
        "áº¿", "á»‡", "á»ƒ", "á»…",
        "Ã¬", "Ã­", "á»‹", "á»‰", "Ä©",
        "Ã²", "Ã³", "á»", "á»", "Ãµ", "Ã´", "á»“", "á»‘", "á»™", "á»•", "á»—", "Æ¡",
        "á»", "á»›", "á»£", "á»Ÿ", "á»¡",
        "Ã¹", "Ãº", "á»¥", "á»§", "Å©", "Æ°", "á»«", "á»©", "á»±", "á»­", "á»¯",
        "á»³", "Ã½", "á»µ", "á»·", "á»¹",
        "Ä‘",
        "Ã€", "Ã", "áº ", "áº¢", "Ãƒ", "Ã‚", "áº¦", "áº¤", "áº¬", "áº¨", "áºª", "Ä‚",
        "áº°", "áº®", "áº¶", "áº²", "áº´",
        "Ãˆ", "Ã‰", "áº¸", "áºº", "áº¼", "ÃŠ", "á»€", "áº¾", "á»†", "á»‚", "á»„",
        "ÃŒ", "Ã", "á»Š", "á»ˆ", "Ä¨",
        "Ã’", "Ã“", "á»Œ", "á»Ž", "Ã•", "Ã”", "á»’", "á»", "á»˜", "á»”", "á»–", "Æ ",
        "á»œ", "á»š", "á»¢", "á»ž", "á» ",
        "Ã™", "Ãš", "á»¤", "á»¦", "Å¨", "Æ¯", "á»ª", "á»¨", "á»°", "á»¬", "á»®",
        "á»²", "Ã", "á»´", "á»¶", "á»¸",
        "Ä"
    );

    no_accents_arr = new Array(
        "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a",
        "a", "a", "a", "a", "a", "a",
        "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
        "i", "i", "i", "i", "i",
        "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",
        "o", "o", "o", "o", "o",
        "u", "u", "u", "u", "u", "u", "u", "u", "u", "u", "u",
        "y", "y", "y", "y", "y",
        "d",
        "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
        "A", "A", "A", "A", "A",
        "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
        "I", "I", "I", "I", "I",
        "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O",
        "O", "O", "O", "O", "O",
        "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",
        "Y", "Y", "Y", "Y", "Y",
        "D"
    );

    return str_replace(accents_arr, no_accents_arr, str);
}

function quickShuffle(arr7) {

    if (arr7.length == 1) { return }
    var x
    var i = Math.floor(Math.random() * (arr7.length - 1)) + 1

    x = arr7[i]
    arr7[i] = arr7[0]
    arr7[0] = x
}

function str_replace(search, replace, str) {
    var ra = replace instanceof Array, sa = str instanceof Array, l = (search = [].concat(search)).length, replace = [].concat(replace), i = (str = [].concat(str)).length;
    while (j = 0, i--)
        while (str[i] = str[i].split(search[j]).join(ra ? replace[j] || "" : replace[0]), ++j < l);
    return sa ? str : str[0];
}

function detectAnimation() {
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx = '',
        elem = document.createElement('div');

    if (elem.style.animationName !== undefined) { animation = true; }

    if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                pfx = domPrefixes[i];
                animationstring = pfx + 'Animation';
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                animation = true;
                break;
            }
        }
    }

    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
        animation = false;
    }

    return animation;
}

function addStyle(styles) {

    /* Create style document */
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet)
        css.styleSheet.cssText = styles;
    else
        css.appendChild(document.createTextNode(styles));

    /* Append style to the tag name */
    document.getElementsByTagName("head")[0].appendChild(css);
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}


function writeToLogFile(msg) {
    var data2 = {};
    data2.strMessage = msg

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        url: '/seterra/services/services.aspx/WriteToLog',
        data: JSON.stringify(data2),
        async: true,
        success: function (response) {
        },
        error: function (error) {
            console.log(error.message)
        }
    })
}

function getString(str) {
    strResult = ''
    if (typeof str != 'undefined') {
        if (str.length > 3) {
            strResult = str
        }
    }
    return strResult
}

function getReplacement(str) {
    replacement = ""
    if (lang == "en") {
        if (str == "us") { return ("united states") }
        if (str == "usa") { return ("united states") }
        if (str == "unitedstatesofamerica") { return ("united states") }
        if (str == "britain") { return ("united kingdom") }
        if (str == "uk") { return ("united kingdom") }
        if (str == "greatbritain") { return ("united kingdom") }
        if (str == "micronesia") { return ("federated states of micronesia") }
        if (str == "uae") { return ("united arab emirates") }
        if (str == "emirates") { return ("united arab emirates") }
        if (str == "czechia") { return ("czech republic") }
        if (str == "congobrazzaville") { return ("republic of the congo") }
        if (str == "congorepublic") { return ("republic of the congo") }
        if (str == "roc") { return ("republic of the congo") }
        if (str == "congokinshasa") { return ("democratic republic of the congo") }
        if (str == "drc") { return ("democratic republic of the congo") }

        if (str == "burma") { return ("myanmar") }
        if (str == "timorleste") { return ("east timor") }
        if (str == "swaziland") { return ("eswatini") }
        if (str == "roc") { return ("taiwan") }
        if (str == "republicofchina") { return ("taiwan") }
        if (str == "kiev") { return ("kyiv") }
        if (str == "dprk") { return ("north korea") }
        if (str == "rok") { return ("south korea") }
        if (str == "prc") { return ("china") }
        if (str == "car") { return ("central african republic") }
        if (str == "ussr") { return ("soviet union") }
        if (str == "bombay") { return ("mumbai") }
        if (str == "mumbai") { return ("bombay") }
        if (str == "gqeberha") { return ("portelizabeth") }
        if (str == "portelizabeth") { return ("gqeberha") }
        if (str == "orissa") { return ("odisha") }
        if (str == "astana") { return ("nursultan") }
        if (str == "gdr") { return ("east germany") }
        if (str == "ddr") { return ("east germany") }
        if (str == "frg") { return ("west germany") }
        if (str == "rsa") { return ("south africa") }
        if (str == "saintlouis") { return ("stlouis") }
        if (str == "stlucia") { return ("saint lucia") }
        if (str == "stkittsandnevis") { return ("saintkittsandnevis") }
        if (str == "stvincent") { return ("saint vincent and the grenadines") }
        if (str == "stvincentandthegrenadines") { return ("saint vincent and the grenadines") }
        if (str == "saintvincent") { return ("saint vincent and the grenadines") }
        if (str == "saintpetersburg") { return ("st petersburg") }
        if (str == "saintthomasandprince") { return ("sao tome and principe") }
        if (str == "stthomasandprince") { return ("sao tome and principe") }
        if (str == "stlawrence") { return ("saint lawrence") }
        if (str == "stpierreandmiquelon") { return ("Saint Pierre and Miquelon ") }
        if (str == "huanghe") { return ("yellowriver") }
        if (str == "changjiang") { return ("yangtze") }
        if (str == "heilongjiang") { return ("amur") }
        if (str == "eastsea") { return ("sea of japan") }
        if (str == "eivissa") { return ("ibiza") }
        if (str == "mountmckinley") { return ("denali") }
        if (str == "madras") { return ("chennai") }
        if (str == "bengaluru") { return ("bangalore") }
        if (str == "tibet") { return ("xizang") }
        if (str == "hongkong") { return ("xianggang") }
        if (str == "xianggang") { return ("hongkong") }
        if (str == "bosniaherzegovina") { return ("bosnia and herzegovina") }
        if (str == "tellus") { return ("earth") }
        if (str == "ulaanbaator") { return ("ulanbator") }
        if (str == "ulaanbaatar") { return ("ulanbator") }
        if (str == "ulanbator") { return ("ulaanbaatar") }
        if (str == "peking") { return ("beijing") }
        if (str == "santiago") { return ("santiagodechile") }
        if (str == "milano") { return ("milan") }
        if (str == "sevilla") { return ("seville") }
        if (str == "napoli") { return ("naples") }
        if (str == "voronezj") { return ("voronezh") }
        if (str == "manawatuwanganui") { return ("manawatuwhanganui") }
        if (str == "turkiye") { return ("turkey") }
        if (str == "capeverde") { return ("caboverde") }
        if (str == "caboverde") { return ("capeverde") }
        if (str == "ivorycoast") { return ("cotedivoire") }
        if (str == "cotedivoire") { return ("ivorycoast") }
        if (str == "yukonterritory") { return ("yukon") }
        if (str == "odessa") { return ("odesa") }
        //if (str == "bosnia") { return ("bosniaandherzegovina") }
    }
    if (lang == "sv") {
        if (str == "forentastaterna") { return ("usa") }
        if (str == "forenadekungariket") { return ("storbritanninen") }
        if (str == "uae") { return ("fÃ¶renade arabemiraten") }
        if (str == "eswatini") { return ("swaziland") }
        if (str == "swaziland") { return ("eswatini") }
        if (str == "myanmar") { return ("burma") }
        if (str == "burma") { return ("myanmar") }
        if (str == "caboverde") { return ("kap verde") }
        if (str == "vitryssland") { return ("belarus") }
        if (str == "kyiv") { return ("kiev") }
        if (str == "kiev") { return ("kyiv") }
        if (str == "peking") { return ("beijing") }
        if (str == "beijing") { return ("peking") }
        if (str == "bombay") { return ("mumbai") }
        if (str == "mumbai") { return ("bombay") }
        if (str == "astana") { return ("nursultan") }
        if (str == "calcutta") { return ("kolkata") }
        if (str == "kolkata") { return ("calcutta") }
        if (str == "ddr") { return ("Ã¶sttyskland") }
        if (str == "stpetersburg") { return ("sankt petersburg") }
        if (str == "nigerfloden") { return ("niger") }
        if (str == "saharaoknen") { return ("sahara") }
        if (str == "gulafloden") { return ("huanghe") }
        if (str == "heilong") { return ("amur") }
        if (str == "changjiang") { return ("Yangtze") }
        //if (str == "bosnien") { return ("Bosnien-Hercegovina") }
        if (str == "bosnienochhercegovina") { return ("Bosnien-Hercegovina") }
        if (str == "tellus") { return ("jorden") }
        if (str == "ulaanbaatar") { return ("ulanbator") }
        if (str == "ulanbator") { return ("ulaanbaatar") }
        if (str == "peking") { return ("beijing") }
        if (str == "mexico") { return ("mexiko") }
        if (str == "santiago") { return ("santiagodechile") }
    }

    if (lang == "da") {
        if (str == "swasiland") { return ("eswatini") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "peking") { return ("beijing") }
        if (str == "beijing") { return ("peking") }
        if (str == "congobrazzaville") { return ("republikken kongo") }
        if (str == "congokinshasa") { return ("demokratiske republik congo") }
        if (str == "myanmar") { return ("burma") }
        if (str == "burma") { return ("myanmar") }
        if (str == "sanktpetersburg") { return ("st petersburg") }
        if (str == "santiago") { return ("santiagodechile") }
    }

    if (lang == "de") {
        if (str == "birma") { return ("myanmar") }
        if (str == "burma") { return ("myanmar") }
        if (str == "caboverde") { return ("kap verde") }
        if (str == "vereinigteskonigreich") { return ("grossbritannien") }
        if (str == "vae") { return ("vereinigte arabische emirate") }
        if (str == "holland") { return ("niederlande") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "swasiland") { return ("eswatini") }
        if (str == "bahamas") { return ("die bahamas") }
        if (str == "kyiv") { return ("kiev") }
        if (str == "kiev") { return ("kyiv") }
        if (str == "timorleste") { return ("osttimor") }
        if (str == "weissrussland") { return ("belarus") }
        if (str == "drkongo") { return ("demokratischerepublikkongo") }
        if (str == "kongokinshasa") { return ("demokratischerepublikkongo") }
        if (str == "kongobrazzaville") { return ("republikkongo") }
        if (str == "astana") { return ("nursultan") }
        if (str == "calcutta") { return ("kolkata") }
        if (str == "kolkata") { return ("calcutta") }
        if (str == "sanktvincentunddiegrenadinen") { return ("st vincent und die grenadinen") }
        if (str == "sanktvincent") { return ("st vincent und die grenadinen") }
        if (str == "saintvincent") { return ("st vincent und die grenadinen") }
        if (str == "stvincent") { return ("st vincent und die grenadinen") }
        if (str == "sanktlucia") { return ("st lucia") }
        if (str == "saintlucia") { return ("st lucia") }
        if (str == "sanktkittsundnevis") { return ("st kitts und nevis") }
        if (str == "saintkittsundnevis") { return ("st kitts und nevis") }
        if (str == "saintkittsundnevis") { return ("st kitts und nevis") }
        if (str == "dasgrossebecken") { return ("grosses becken") }
        if (str == "grossersklavensee") { return ("der grosse sklavense") }
        if (str == "grossesklavensee") { return ("der grosse sklavense") }
        if (str == "grossersalzsee") { return ("der grosse salzsee") }
        if (str == "grossesalzsee") { return ("der grosse salzsee") }
        if (str == "grosserbarensee") { return ("der grosse barensee") }
        if (str == "grossebarensee") { return ("der grosse barensee") }
        if (str == "vatikan") { return ("vatikanstadt") }
        if (str == "vatikanstaat") { return ("vatikanstadt") }
        //if (str == "bosnien") { return ("Bosnien-Hercegovina") }
        if (str == "bosnienundhercegovina") { return ("Bosnien-Hercegovina") }
        if (str == "kirgistan") { return ("Kirgisistan") }
        if (str == "ulaanbaatar") { return ("ulanbator") }
        if (str == "ulanbator") { return ("ulaanbaatar") }
        if (str == "peking") { return ("beijing") }
        if (str == "beijing") { return ("peking") }
        if (str == "vereinigtestaatenvonamerika") { return ("usa") }
        if (str == "vereinigtestaaten") { return ("usa") }
        if (str == "santiago") { return ("santiagodechile") }
    }

    if (lang == "fi") {
        if (str == "myanmar") { return ("burma") }
        if (str == "burma") { return ("myanmar") }
        if (str == "tellus") { return ("maa") }
    }

    if (lang == "fr") {
        if (str == "antigueetbarbude") { return ("Antigua-et-Barbuda") }
        if (str == "asmera") { return ("asmara") }
        if (str == "belarus") { return ("BiÃ©lorussie") }
        if (str == "beijing") { return ("pekin") }
        if (str == "birmanie") { return ("myanmar") }
        if (str == "bissao") { return ("bissau") }
        if (str == "belarus") { return ("bielorussie") }
        if (str == "bosnieetherzegovine") { return ("bosnie herzegovine") }
        if (str == "burkina") { return ("burkinafaso") }
        if (str == "calcutta") { return ("kolkata") }
        if (str == "centrafrique") { return ("republique centrafricaine") }
        if (str == "congobrazzaville") { return ("republique du congo") }
        if (str == "congokinshasa") { return ("republique democratique du congo") }
        if (str == "dhaka") { return ("dacca") }
        if (str == "doubai") { return ("dubai") }
        if (str == "eau") { return ("Ã‰mirats arabes unis") }
        if (str == "emirats") { return ("Ã‰mirats arabes unis") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "guineebissao") { return ("GuinÃ©e-Bissau") }
        if (str == "guineebissao") { return ("guineebissau") }
        if (str == "hellade") { return ("GrÃ¨ce") }
        if (str == "hellas") { return ("GrÃ¨ce") }
        if (str == "huanghe") { return ("fleuvejaune") }
        if (str == "ilesfidji") { return ("fidji") }
        if (str == "iraq") { return ("irak") }
        if (str == "kirghizie") { return ("Kirghizistan") }
        if (str == "kirghizie") { return ("Kirghizistan") }
        if (str == "kirghizie") { return ("Kirghizistan") }
        if (str == "kirghizie") { return ("Kirghizistan") }
        if (str == "kirghizie") { return ("Kirghizistan") }
        if (str == "kirghizstan") { return ("Kirghizistan") }
        if (str == "kl") { return ("Kuala Lumpur") }
        if (str == "kitega") { return ("gitega") }
        if (str == "kolkata") { return ("calcutta") }
        if (str == "nouvelledelhi") { return ("newdelhi") }
        if (str == "kotte") { return ("Sri Jayawardenapura Kotte") }
        if (str == "lessalomon") { return ("ÃŽles Salomon") }
        if (str == "tiflis") { return ("Tiblisi") }
        if (str == "louanda") { return ("Luanda") }
        if (str == "madras") { return ("chennai") }
        if (str == "marshall") { return ("ÃŽles Marshall") }
        if (str == "merdelest") { return ("Mer du Japon") }
        if (str == "merorientale") { return ("Mer du Japon") }
        if (str == "myanmar") { return ("birmanie") }
        if (str == "mumbai") { return ("bombay") }
        if (str == "ngwane") { return ("eswatini") }
        if (str == "nanjing") { return ("nankin") }
        if (str == "nioue") { return ("niue") }
        if (str == "ouaga") { return ("Ouagadougou") }
        if (str == "perse") { return ("iran") }
        if (str == "rca") { return ("republique centrafricaine") }
        if (str == "rci") { return ("CÃ´te d'Ivoire") }
        if (str == "rdc") { return ("republique democratique du congo") }
        if (str == "rdcongo") { return ("republique democratique du congo") }
        if (str == "rfa") { return ("allemagne") }
        if (str == "rpc") { return ("chine") }
        if (str == "rpdc") { return ("CorÃ©e du Nord") }
        if (str == "saintchristopheetnevis") { return ("Saint-Christophe-et-NiÃ©vÃ¨s") }
        if (str == "saintkittsetnevis") { return ("Saint-Christophe-et-NiÃ©vÃ¨s") }
        if (str == "saintthomas") { return ("SÃ£o TomÃ©") }
        if (str == "saintthomasetlileduprince") { return ("Sao TomÃ©-et-Principe") }
        if (str == "surinam") { return ("suriname") }
        if (str == "svg") { return ("Saint-Vincent-et-les-Grenadines") }
        if (str == "swasiland") { return ("eswatini") }
        if (str == "turkmenie") { return ("TurkmÃ©nistan") }
        if (str == "usa") { return ("Ã‰tats-Unis") }
        if (str == "erevan") { return ("yerevan") }
        if (str == "xizang") { return ("tibet") }
        if (str == "santiago") { return ("santiagoduchili") }
    }
    
    if (lang == "nl") {
        if (str == "swasiland") { return ("eswatini") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "myanmar") { return ("birma") }
        if (str == "birma") { return ("myanmar") }
        if (str == "vs") { return ("Verenigde Staten") }
        if (str == "kirgistan") { return ("KirgiziÃ«") }
    }

    if (lang == "es") {
        if (str == "swasiland") { return ("eswatini") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "birmania") { return ("myanmar") }
        if (str == "myanmar") { return ("birmania") }
        if (str == "calcutta") { return ("kolkata") }
        if (str == "kolkata") { return ("calcutta") }
        if (str == "huanghe") { return ("rio amarillo") }
        if (str == "emiratosarabesunidos") { return ("los emiratos arabes unidos") }
        if (str == "eau") { return ("los emiratos arabes unidos") }
        if (str == "eeuu") { return ("estados unidos de amÃ©rica") }
        if (str == "eua") { return ("estados unidos de amÃ©rica") }
        if (str == "losestadosunidosdeamerica") { return ("estados unidos de amÃ©rica") }
        if (str == "estadosunidos") { return ("estados unidos de amÃ©rica") }
        if (str == "islasbaleares") { return ("baleares") }
        if (str == "vaticano") { return ("Ciudad del Vaticano") }
        if (str == "republicacentroafricana") { return ("la RepÃºblica Centroafricana") }
        if (str == "republicadelcongo") { return ("la RepÃºblica del Congo") }
        if (str == "republicademocraticadelcongo") { return ("la RepÃºblica Democratica del Congo") }
        if (str == "rdcongo") { return ("la RepÃºblica Democratica del Congo") }
        if (str == "congokinsasa") { return ("la RepÃºblica Democratica del Congo") }
        if (str == "congobrazzaville") { return ("la RepÃºblica del Congo") }
        if (str == "santiago") { return ("santiagodechile") }
        if (str == "kirguizistan") { return ("KirguistÃ¡n") }
    }

    if (lang == "nb") {
        if (str == "swasiland") { return ("eswatini") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "santiago") { return ("santiagodechile") }
    }

    if (lang == "pl") {
        if (str == "suazi") { return ("eswatini") }
        if (str == "eswatini") { return ("suazi") }
        if (str == "santiago") { return ("santiagodechile") }
    }
    
    if (lang == "pt") {
        if (str == "micronesia") { return ("estados federados da micronesia") }
        if (str == "santiago") { return ("santiagodechile") }
    }
    if (lang == "it") {
        if (str == "swasiland") { return ("eswatini") }
        if (str == "eswatini") { return ("swasiland") }
        if (str == "congo") { return ("repubblica del congo") }
        if (str == "congobrazzaville") { return ("repubblica del congo") }
        if (str == "congokinshasa") { return ("Repubblica Democratica del Congo") }
        if (str == "myanmar") { return ("birmania") }
        if (str == "birmania") { return ("myanmar") }
        if (str == "vaticano") { return ("CittÃ  del Vaticano") }
        if (str == "palau") { return ("Repubblica di Palau") }
        if (str == "micronesia") { return ("Stati Federati di Micronesia") }
        if (str == "santiago") { return ("santiagodechile") }
    }

    if (lang == "en-an") {
        if (str == "aluminum") { return ("aluminium") }
    }

    if (lang == 'ru') {
        if (str == "ÑÑˆÐ°") { return ("Ð¡Ð¾ÐµÐ´Ð¸Ð½Ñ‘Ð½Ð½Ñ‹Ðµ Ð¨Ñ‚Ð°Ñ‚Ñ‹ ÐÐ¼ÐµÑ€Ð¸ÐºÐ¸") }
        if (str == "ÑŽÐ°Ñ€") { return ("Ð®Ð¶Ð½Ð¾-ÐÑ„Ñ€Ð¸ÐºÐ°Ð½ÑÐºÐ°Ñ Ð ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ°") }
        if (str == "Ð¾Ð°Ñ") { return ("ÐžÐ±ÑŠÐµÐ´Ð¸Ð½Ñ‘Ð½Ð½Ñ‹Ðµ ÐÑ€Ð°Ð±ÑÐºÐ¸Ðµ Ð­Ð¼Ð¸Ñ€Ð°Ñ‚Ñ‹") }
        if (str == "Ð²ÐµÐ»Ð¸ÐºÐ¾Ð±Ñ€Ð¸Ñ‚Ð°Ð½Ð¸Ñ") { return ("Ð¡Ð¾ÐµÐ´Ð¸Ð½Ñ‘Ð½Ð½Ð¾Ðµ ÐšÐ¾Ñ€Ð¾Ð»ÐµÌÐ²ÑÑ‚Ð²Ð¾") }
        if (str == "Ð¼Ð¸ÐºÑ€Ð¾Ð½ÐµÐ·Ð¸Ñ") { return ("Ñ„ÐµÐ´ÐµÑ€Ð°Ñ‚Ð¸Ð²Ð½Ñ‹Ðµ ÑˆÑ‚Ð°Ñ‚Ñ‹ Ð¼Ð¸ÐºÑ€Ð¾Ð½ÐµÐ·Ð¸Ð¸") }
        if (str == "ÐºÐ¾Ð½Ð³Ð¾") { return ("Ñ€ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ° ÐºÐ¾Ð½Ð³Ð¾") }
        if (str == "Ñ†Ð°Ñ€") { return ("Ñ†ÐµÐ½Ñ‚Ñ€Ð°Ð»ÑŒÐ½Ð¾-Ð°Ñ„Ñ€Ð¸ÐºÐ°Ð½ÑÐºÐ°Ñ Ñ€ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ°") }
    }

    return ""
}

function getGameModeAbbreviation(gameMode) {
    var gMode = ""
    if (gameMode == "multi") { gMode = "m" };
    if (gameMode == "pin") { gMode = "p" };
    if (gameMode == "pinnoborders") { gMode = "b" };
    if (gameMode == "pinhard") { gMode = "h" };
    if (gameMode == "pinhardnoborders") { gMode = "o" };
    if (gameMode == "pinflags") { gMode = "g" };
    if (gameMode == "wikipedia") { gMode = "w" }
    if (gameMode == "learn") { gMode = "l" }
    if (gameMode == "placelabels") { gMode = "d" }
    if (gameMode == "placeflags") { gMode = "f" }
    if (gameMode == "type") { gMode = "t" }
    if (gameMode == "typeeasy") { gMode = "y" }
    if (gameMode == "typeauto") { gMode = "a" }

    return gMode;
}

function hasDarkMode(url) {
    var res = true
    if (url.indexOf("terms.aspx") != -1) {
        res = false
    }

    if (url.indexOf("privacy.aspx") != -1) {
        res = false
    }

    if (url.indexOf("searchresults.aspx") != -1) {
        res = false
    }

    return res
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadDarkMode() {
    if (hasDarkMode(window.location.href) == false) {
        return;
    } else {
        if ($('#chkDarkMode').prop('checked')) {
            $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/seterra/css/darkmode.css'));
            $.cookie('darkmode', '1', { path: '/', expires: 14 });

        } else {
            $('link[rel=stylesheet][href~="/seterra/css/darkmode.css"]').remove();
            $.cookie('darkmode', '0', { path: '/', expires: 14 });
        }
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 400)
    }
}

function convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);
    return newDate;
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}