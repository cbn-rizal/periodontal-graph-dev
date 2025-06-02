	// Definition der Variablen fÃ¼r das Formular
    var Zahn_25 = 1;
    var Implantat_25 = 0;
    var BOP_25_db = 0;
    var BOP_25_b = 0;
    var BOP_25_mb = 0;
    var PI_25_db = 0;
    var PI_25_b = 0;
    var PI_25_mb = 0;
    var BOP_25_dp = 0;
    var BOP_25_p = 0;
    var BOP_25_mp = 0;
    var PI_25_dp = 0;
    var PI_25_p = 0;
    var PI_25_mp = 0;
    var mg_25_db = 0;
    var mg_25_b = 0;
    var mg_25_mb = 0;
    var st_25_db = 0;
    var st_25_b = 0;
    var st_25_mb = 0;
    var mg_25_dp = 0;
    var mg_25_p = 0;
    var mg_25_mp = 0;
    var st_25_dp = 0;
    var st_25_p = 0;
    var st_25_mp = 0;

function clear_data_25() {
    if (Zahn_25 == 1) {
        mg_25_db = 0;
        mg_25_b = 0;
        mg_25_mb = 0;
        st_25_db = 0;
        st_25_b = 0;
        st_25_mb = 0;

            document.getElementById('mg_25_db_txt').value = 0;
            document.getElementById('mg_25_b_txt').value = 0;
            document.getElementById('mg_25_mb_txt').value = 0;
            
            document.getElementById('st_25_db_txt').value = 0;
            document.getElementById('st_25_b_txt').value = 0;
            document.getElementById('st_25_mb_txt').value = 0;
        
            document.forms[0]["st_25_db"].style.color = 'black'
            document.forms[0]["st_25_b"].style.color = 'black'
            document.forms[0]["st_25_mb"].style.color = 'black'
        
        mg_25_dp = 0;
        mg_25_p = 0;
        mg_25_mp = 0;
        st_25_dp = 0;
        st_25_p = 0;
        st_25_mp = 0;

            document.getElementById('mg_25_dp_txt').value = 0;
            document.getElementById('mg_25_p_txt').value = 0;
            document.getElementById('mg_25_mp_txt').value = 0;
            
            document.getElementById('st_25_dp_txt').value = 0;
            document.getElementById('st_25_p_txt').value = 0;
            document.getElementById('st_25_mp_txt').value = 0;

            document.forms[0]["st_25_dp"].style.color = 'black'
            document.forms[0]["st_25_p"].style.color = 'black'
            document.forms[0]["st_25_mp"].style.color = 'black'
        
        change_probing_25();
        
        mobility_25 = 0;

            document.getElementById('mobility_25_txt').value = "0";

        note_25 = "";

            document.getElementById('note_25_txt').value = "";

        BOP_25_db = 0;
        BOP_25_b = 0;
        BOP_25_mb = 0;
                
        BOP_25_dp = 0;
        BOP_25_p = 0;
        BOP_25_mp = 0;
                
            document.getElementById('BOP_25_db_rectangle').style.display = 'none';
            document.getElementById('BOP_25_b_rectangle').style.display = 'none';
            document.getElementById('BOP_25_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_25_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_25_p_rectangle').style.display = 'none';
            document.getElementById('BOP_25_mp_rectangle').style.display = 'none';
            
        PI_25_db = 0;
        PI_25_b = 0;
        PI_25_mb = 0;
                
        PI_25_dp = 0;
        PI_25_p = 0;
        PI_25_mp = 0;

            document.getElementById('PI_25_db_rectangle').style.display = 'none';
            document.getElementById('PI_25_b_rectangle').style.display = 'none';
            document.getElementById('PI_25_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_25_dp_rectangle').style.display = 'none';
            document.getElementById('PI_25_p_rectangle').style.display = 'none';
            document.getElementById('PI_25_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_25() {
    if (Zahn_25 === 1) {
        Zahn_25 = 0;
        document.getElementById('tooth_line_25_b').style.display = 'block';
        document.getElementById('tooth_line_25_p').style.display = 'block';
        
        document.getElementById('mobility_25_txt').style.display = 'none';
        
        document.getElementById('implantat_25_btn').style.display = 'none';
        document.getElementById('implantat_25_tab').style.display = 'none';
        document.getElementById('implantat_25_b_image').style.display = 'none';
        document.getElementById('implantat_25_p_image').style.display = 'none';

        document.getElementById('mg_25_db_txt').style.display = 'none';
        document.getElementById('mg_25_b_txt').style.display = 'none';
        document.getElementById('mg_25_mb_txt').style.display = 'none';
        
        document.getElementById('st_25_db_txt').style.display = 'none';
        document.getElementById('st_25_b_txt').style.display = 'none';
        document.getElementById('st_25_mb_txt').style.display = 'none';
        
        document.getElementById('mg_25_dp_txt').style.display = 'none';
        document.getElementById('mg_25_p_txt').style.display = 'none';
        document.getElementById('mg_25_mp_txt').style.display = 'none';
        
        document.getElementById('st_25_dp_txt').style.display = 'none';
        document.getElementById('st_25_p_txt').style.display = 'none';
        document.getElementById('st_25_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_25_db_rectangle').style.display = 'none';
        document.getElementById('BOP_25_b_rectangle').style.display = 'none';
        document.getElementById('BOP_25_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_25_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_25_p_rectangle').style.display = 'none';
        document.getElementById('BOP_25_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_25_db_btn').style.display = 'none';
        document.getElementById('BOP_25_b_btn').style.display = 'none';
        document.getElementById('BOP_25_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_25_dp_btn').style.display = 'none';
        document.getElementById('BOP_25_p_btn').style.display = 'none';
        document.getElementById('BOP_25_mp_btn').style.display = 'none';
        
        document.getElementById('PI_25_db_rectangle').style.display = 'none';
        document.getElementById('PI_25_b_rectangle').style.display = 'none';
        document.getElementById('PI_25_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_25_dp_rectangle').style.display = 'none';
        document.getElementById('PI_25_p_rectangle').style.display = 'none';
        document.getElementById('PI_25_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_25_db_btn').style.display = 'none';
        document.getElementById('PI_25_b_btn').style.display = 'none';
        document.getElementById('PI_25_mb_btn').style.display = 'none';
        
        document.getElementById('PI_25_dp_btn').style.display = 'none';
        document.getElementById('PI_25_p_btn').style.display = 'none';
        document.getElementById('PI_25_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_25_b').style.display = 'none';
        document.getElementById('polyline_an_25_b').style.display = 'none';
        document.getElementById('polyline_mg_25_b').style.display = 'none';
        
        document.getElementById('polygon_25_p').style.display = 'none';
        document.getElementById('polyline_an_25_p').style.display = 'none';
        document.getElementById('polyline_mg_25_p').style.display = 'none';
        
        document.getElementById('polygon_inter_26_25_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_26_25_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_26_25_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_26_25_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_26_25_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_26_25_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_25_24_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_25_24_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_25_24_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_25_24_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_25_24_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_25_24_p').style.display = 'none';            
        
        document.getElementById('note_25_txt').style.display = 'none';
    }
    else if (Implantat_25 !== 1) {
        Zahn_25 = 1;
        document.getElementById('tooth_line_25_b').style.display = 'none';
        document.getElementById('tooth_line_25_p').style.display = 'none';

        document.getElementById('mobility_25_txt').style.display = 'block';

        document.getElementById('implantat_25_btn').style.display = 'block';

        document.getElementById('mg_25_db_txt').style.display = 'block';
        document.getElementById('mg_25_b_txt').style.display = 'block';
        document.getElementById('mg_25_mb_txt').style.display = 'block';
        
        document.getElementById('st_25_db_txt').style.display = 'block';
        document.getElementById('st_25_b_txt').style.display = 'block';
        document.getElementById('st_25_mb_txt').style.display = 'block';
        
        document.getElementById('mg_25_dp_txt').style.display = 'block';
        document.getElementById('mg_25_p_txt').style.display = 'block';
        document.getElementById('mg_25_mp_txt').style.display = 'block';
        
        document.getElementById('st_25_dp_txt').style.display = 'block';
        document.getElementById('st_25_p_txt').style.display = 'block';
        document.getElementById('st_25_mp_txt').style.display = 'block';
        
        document.getElementById('note_25_txt').style.display = 'block';

        document.getElementById('polygon_25_b').style.display = 'block';
        document.getElementById('polyline_an_25_b').style.display = 'block';
        document.getElementById('polyline_mg_25_b').style.display = 'block';
        
        document.getElementById('polygon_25_p').style.display = 'block';
        document.getElementById('polyline_an_25_p').style.display = 'block';
        document.getElementById('polyline_mg_25_p').style.display = 'block';

        if (Zahn_26 == 1 && Zahn_25 == 1) {
            document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_p').style.display = 'block';            
        }
        
        if (Zahn_25 == 1 && Tooth_24 == 1) {
            document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_p').style.display = 'block';            
        }

        document.getElementById('BOP_25_db_btn').style.display = 'block';
        document.getElementById('BOP_25_b_btn').style.display = 'block';
        document.getElementById('BOP_25_mb_btn').style.display = 'block';

        document.getElementById('BOP_25_dp_btn').style.display = 'block';
        document.getElementById('BOP_25_p_btn').style.display = 'block';
        document.getElementById('BOP_25_mp_btn').style.display = 'block';
        
        if (BOP_25_db == 1) {
            document.getElementById('BOP_25_db_rectangle').style.display = 'block';
        }
        if (BOP_25_b == 1) {
            document.getElementById('BOP_25_b_rectangle').style.display = 'block';
        }
        if (BOP_25_mb == 1) {
            document.getElementById('BOP_25_mb_rectangle').style.display = 'block';
        }
        if (BOP_25_dp == 1) {
            document.getElementById('BOP_25_dp_rectangle').style.display = 'block';
        }
        if (BOP_25_p == 1) {
            document.getElementById('BOP_25_p_rectangle').style.display = 'block';
        }
        if (BOP_25_mp == 1) {
            document.getElementById('BOP_25_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_25_db_btn').style.display = 'block';
        document.getElementById('PI_25_b_btn').style.display = 'block';
        document.getElementById('PI_25_mb_btn').style.display = 'block';

        document.getElementById('PI_25_dp_btn').style.display = 'block';
        document.getElementById('PI_25_p_btn').style.display = 'block';
        document.getElementById('PI_25_mp_btn').style.display = 'block';
        
        if (PI_25_db == 1) {
            document.getElementById('PI_25_db_rectangle').style.display = 'block';
        }
        if (PI_25_b == 1) {
            document.getElementById('PI_25_b_rectangle').style.display = 'block';
        }
        if (PI_25_mb == 1) {
            document.getElementById('PI_25_mb_rectangle').style.display = 'block';
        }
        if (PI_25_dp == 1) {
            document.getElementById('PI_25_dp_rectangle').style.display = 'block';
        }
        if (PI_25_p == 1) {
            document.getElementById('PI_25_p_rectangle').style.display = 'block';
        }
        if (PI_25_mp == 1) {
            document.getElementById('PI_25_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_25 == 1) {
        Zahn_25 = 1;
        document.getElementById('tooth_line_25_b').style.display = 'none';
        document.getElementById('tooth_line_25_p').style.display = 'none';

        document.getElementById('mobility_25_txt').style.display = 'block';
        
        document.getElementById('note_25_txt').style.display = 'block';

        document.getElementById('implantat_25_btn').style.display = 'block';
        document.getElementById('implantat_25_tab').style.display = 'block';
        document.getElementById('implantat_25_b_image').style.display = 'block';
        document.getElementById('implantat_25_p_image').style.display = 'block';

        document.getElementById('mg_25_db_txt').style.display = 'block';
        document.getElementById('mg_25_b_txt').style.display = 'block';
        document.getElementById('mg_25_mb_txt').style.display = 'block';
        
        document.getElementById('st_25_db_txt').style.display = 'block';
        document.getElementById('st_25_b_txt').style.display = 'block';
        document.getElementById('st_25_mb_txt').style.display = 'block';
        
        document.getElementById('mg_25_dp_txt').style.display = 'block';
        document.getElementById('mg_25_p_txt').style.display = 'block';
        document.getElementById('mg_25_mp_txt').style.display = 'block';
        
        document.getElementById('st_25_dp_txt').style.display = 'block';
        document.getElementById('st_25_p_txt').style.display = 'block';
        document.getElementById('st_25_mp_txt').style.display = 'block';

        document.getElementById('polygon_25_b').style.display = 'block';
        document.getElementById('polyline_an_25_b').style.display = 'block';
        document.getElementById('polyline_mg_25_b').style.display = 'block';
        
        document.getElementById('polygon_25_p').style.display = 'block';
        document.getElementById('polyline_an_25_p').style.display = 'block';
        document.getElementById('polyline_mg_25_p').style.display = 'block';

        if (Zahn_26 == 1 && Zahn_25 == 1) {
            document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_p').style.display = 'block';            
        }
        
        if (Zahn_25 == 1 && Tooth_24 == 1) {
            document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_p').style.display = 'block';            
        }

        document.getElementById('BOP_25_db_btn').style.display = 'block';
        document.getElementById('BOP_25_b_btn').style.display = 'block';
        document.getElementById('BOP_25_mb_btn').style.display = 'block';

        document.getElementById('BOP_25_dp_btn').style.display = 'block';
        document.getElementById('BOP_25_p_btn').style.display = 'block';
        document.getElementById('BOP_25_mp_btn').style.display = 'block';
        
        document.getElementById('PI_25_db_btn').style.display = 'block';
        document.getElementById('PI_25_b_btn').style.display = 'block';
        document.getElementById('PI_25_mb_btn').style.display = 'block';

        document.getElementById('PI_25_dp_btn').style.display = 'block';
        document.getElementById('PI_25_p_btn').style.display = 'block';
        document.getElementById('PI_25_mp_btn').style.display = 'block';
        
        if (BOP_25_db == 1) {
            document.getElementById('BOP_25_db_rectangle').style.display = 'block';
        }
        if (BOP_25_b == 1) {
            document.getElementById('BOP_25_b_rectangle').style.display = 'block';
        }
        if (BOP_25_mb == 1) {
            document.getElementById('BOP_25_mb_rectangle').style.display = 'block';
        }
        if (BOP_25_dp == 1) {
            document.getElementById('BOP_25_dp_rectangle').style.display = 'block';
        }
        if (BOP_25_p == 1) {
            document.getElementById('BOP_25_p_rectangle').style.display = 'block';
        }
        if (BOP_25_mp == 1) {
            document.getElementById('BOP_25_mp_rectangle').style.display = 'block';
        }
        
        if (PI_25_db == 1) {
            document.getElementById('PI_25_db_rectangle').style.display = 'block';
        }
        if (PI_25_b == 1) {
            document.getElementById('PI_25_b_rectangle').style.display = 'block';
        }
        if (PI_25_mb == 1) {
            document.getElementById('PI_25_mb_rectangle').style.display = 'block';
        }
        if (PI_25_dp == 1) {
            document.getElementById('PI_25_dp_rectangle').style.display = 'block';
        }
        if (PI_25_p == 1) {
            document.getElementById('PI_25_p_rectangle').style.display = 'block';
        }
        if (PI_25_mp == 1) {
            document.getElementById('PI_25_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_25() {
    if (Implantat_25 == 0) {
        Implantat_25 = 1;
        
        document.getElementById('implantat_25_b_image').style.display = 'block';
        document.getElementById('implantat_25_p_image').style.display = 'block';
        document.getElementById('implantat_25_tab').style.display = 'block';
    }
    else {
        Implantat_25 = 0;
        
        document.getElementById('implantat_25_b_image').style.display = 'none';
        document.getElementById('implantat_25_p_image').style.display = 'none';
        document.getElementById('implantat_25_tab').style.display = 'none';
    }
}

function toggle_BOP_25_db() {
    if (BOP_25_db == 0) {
        BOP_25_db = 1;
        document.getElementById('BOP_25_db_rectangle').style.display = 'block';
    }
    else {
        BOP_25_db = 0;
        document.getElementById('BOP_25_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_25_b() {
    if (BOP_25_b == 0) {
        BOP_25_b = 1;
        document.getElementById('BOP_25_b_rectangle').style.display = 'block';
    }
    else {
        BOP_25_b = 0;
        document.getElementById('BOP_25_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_25_mb() {
    if (BOP_25_mb == 0) {
        BOP_25_mb = 1;
        document.getElementById('BOP_25_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_25_mb = 0;
        document.getElementById('BOP_25_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_25_db() {
    if (PI_25_db == 0) {
        PI_25_db = 1;
        document.getElementById('PI_25_db_rectangle').style.display = 'block';
    }
    else {
        PI_25_db = 0;
        document.getElementById('PI_25_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_25_b() {
    if (PI_25_b == 0) {
        PI_25_b = 1;
        document.getElementById('PI_25_b_rectangle').style.display = 'block';
    }
    else {
        PI_25_b = 0;
        document.getElementById('PI_25_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_25_mb() {
    if (PI_25_mb == 0) {
        PI_25_mb = 1;
        document.getElementById('PI_25_mb_rectangle').style.display = 'block';
    }
    else {
        PI_25_mb = 0;
        document.getElementById('PI_25_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_25_dp() {
    if (BOP_25_dp == 0) {
        BOP_25_dp = 1;
        document.getElementById('BOP_25_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_25_dp = 0;
        document.getElementById('BOP_25_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_25_p() {
    if (BOP_25_p == 0) {
        BOP_25_p = 1;
        document.getElementById('BOP_25_p_rectangle').style.display = 'block';
    }
    else {
        BOP_25_p = 0;
        document.getElementById('BOP_25_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_25_mp() {
    if (BOP_25_mp == 0) {
        BOP_25_mp = 1;
        document.getElementById('BOP_25_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_25_mp = 0;
        document.getElementById('BOP_25_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_25_dp() {
    if (PI_25_dp == 0) {
        PI_25_dp = 1;
        document.getElementById('PI_25_dp_rectangle').style.display = 'block';
    }
    else {
        PI_25_dp = 0;
        document.getElementById('PI_25_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_25_p() {
    if (PI_25_p == 0) {
        PI_25_p = 1;
        document.getElementById('PI_25_p_rectangle').style.display = 'block';
    }
    else {
        PI_25_p = 0;
        document.getElementById('PI_25_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_25_mp() {
    if (PI_25_mp == 0) {
        PI_25_mp = 1;
        document.getElementById('PI_25_mp_rectangle').style.display = 'block';
    }
    else {
        PI_25_mp = 0;
        document.getElementById('PI_25_mp_rectangle').style.display = 'none';
    }
}

function change_probing_25() {
    if (Zahn_25 == 1) {
        
    // Variablen aus dem Formular
        st_25_db = document.forms[0]["st_25_db"].value;
        st_25_b = document.forms[0]["st_25_b"].value;
        st_25_mb = document.forms[0]["st_25_mb"].value;

        if (document.forms[0]["st_25_dp"].value > 3) {document.forms[0]["st_25_dp"].style.color = 'red';} else {document.forms[0]["st_25_dp"].style.color = 'black'};
        if (document.forms[0]["st_25_p"].value > 3) {document.forms[0]["st_25_p"].style.color = 'red';} else {document.forms[0]["st_25_p"].style.color = 'black'};
        if (document.forms[0]["st_25_mp"].value > 3) {document.forms[0]["st_25_mp"].style.color = 'red';} else {document.forms[0]["st_25_mp"].style.color = 'black'};
        
        mg_25_db = document.forms[0]["mg_25_db"].value;
        mg_25_b = document.forms[0]["mg_25_b"].value;
        mg_25_mb = document.forms[0]["mg_25_mb"].value;
        
        st_25_dp = document.forms[0]["st_25_dp"].value;
        st_25_p = document.forms[0]["st_25_p"].value;
        st_25_mp = document.forms[0]["st_25_mp"].value;

        if (document.forms[0]["st_25_db"].value > 3) {document.forms[0]["st_25_db"].style.color = 'red';} else {document.forms[0]["st_25_db"].style.color = 'black'};
        if (document.forms[0]["st_25_b"].value > 3) {document.forms[0]["st_25_b"].style.color = 'red';} else {document.forms[0]["st_25_b"].style.color = 'black'};
        if (document.forms[0]["st_25_mb"].value > 3) {document.forms[0]["st_25_mb"].style.color = 'red';} else {document.forms[0]["st_25_mb"].style.color = 'black'};
        
        mg_25_dp = document.forms[0]["mg_25_dp"].value;
        mg_25_p = document.forms[0]["mg_25_p"].value;
        mg_25_mp = document.forms[0]["mg_25_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
        var x_db_25 = 895;							// distal 25
        var x_mb_25 = 869;							// mesial 25
        var x_b_25 = (x_db_25 + x_mb_25)/2;			// bukkal 25
        
    // Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
        var x_dp_25 = 897;							// distal 25
        var x_mp_25 = 871;							// mesial 25
        var x_p_25 = (x_dp_25 + x_mp_25)/2;			// palatinal 25
        
    // Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
        var y_mg_25_db = mg_OK_b + 6.5 * mg_25_db;	// Margo Gingivae distobukkal 25
        var y_mg_25_b = mg_OK_b + 6.5 * mg_25_b;	// Margo Gingivae bukkal 25
        var y_mg_25_mb = mg_OK_b + 6.5 * mg_25_mb;	// Margo Gingivae mesiobukkal 25
        var y_st_25_db = 6.5 * st_25_db;			// Sondierungstiefe distobukkal 25
        var y_st_25_b = 6.5 * st_25_b;				// Sondierungstiefe bukkal 25
        var y_st_25_mb = 6.5 * st_25_mb;			// Sondierungstiefe mesiobukkal 25
        
    // Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
        var y_mg_25_dp = mg_OK_p - 6.5 * mg_25_dp;	// Margo Gingivae distopalatinal 25
        var y_mg_25_p = mg_OK_p - 6.5 * mg_25_p;	// Margo Gingivae palatinal 25
        var y_mg_25_mp = mg_OK_p - 6.5 * mg_25_mp;	// Margo Gingivae mesiopalatinal 25
        var y_st_25_dp = 6.5 * st_25_dp;			// Sondierungstiefe distopalatinal 25
        var y_st_25_p = 6.5 * st_25_p;				// Sondierungstiefe palatinal 25
        var y_st_25_mp = 6.5 * st_25_mp;			// Sondierungstiefe mesiopalatinal 25
        
    // Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_25_db = y_mg_25_db - y_st_25_db;	// Attachmentniveau distobukkal 25
        var y_an_25_b = y_mg_25_b - y_st_25_b;		// Attachmentniveau bukkal 25
        var y_an_25_mb = y_mg_25_mb - y_st_25_mb;	// Attachmentniveau mesiobukkal 25
        
    // Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_25_dp = y_mg_25_dp + y_st_25_dp;	// Attachmentniveau distopalatinal 25
        var y_an_25_p = y_mg_25_p + y_st_25_p;		// Attachmentniveau palatinal 25
        var y_an_25_mp = y_mg_25_mp + y_st_25_mp;	// Attachmentniveau mesiopalatinal 25
        
    // Parodontaltasche 25 bukkal zeichnen
        var string = 
            x_db_25 + ", " + y_an_25_db + "  " + 
            x_b_25 + ", " + y_an_25_b + "  " + 
            x_mb_25 + ", " + y_an_25_mb + "  " + 
            x_mb_25 + ", " + y_mg_25_mb + "  " + 
            x_b_25 + ", " + y_mg_25_b + "  " + 
            x_db_25 + ", " + y_mg_25_db;
        document.getElementById("polygon_25_b").setAttribute("points", string);
    // Attachmentniveau 25 bukkal zeichnen
        var string = 
            x_db_25 + ", " + y_an_25_db + "  " + 
            x_b_25 + ", " + y_an_25_b + "  " + 
            x_mb_25 + ", " + y_an_25_mb;
        document.getElementById("polyline_an_25_b").setAttribute("points", string);
    // Margo Gingivae 25 bukkal zeichnen
        var string =
            x_db_25 + ", " + y_mg_25_db + "  " + 
            x_b_25 + ", " + y_mg_25_b + "  " + 
            x_mb_25 + ", " + y_mg_25_mb;
        document.getElementById("polyline_mg_25_b").setAttribute("points", string);

    // Parodontaltasche 25 palatinal zeichnen
        var string = 
            x_dp_25 + ", " + y_an_25_dp + "  " + 
            x_p_25 + ", " + y_an_25_p + "  " + 
            x_mp_25 + ", " + y_an_25_mp + "  " + 
            x_mp_25 + ", " + y_mg_25_mp + "  " + 
            x_p_25 + ", " + y_mg_25_p + "  " + 
            x_dp_25 + ", " + y_mg_25_dp;
        document.getElementById("polygon_25_p").setAttribute("points", string);
    // Attachmentniveau 25 palatinal zeichnen
        var string = 
            x_dp_25 + ", " + y_an_25_dp + "  " + 
            x_p_25 + ", " + y_an_25_p + "  " + 
            x_mp_25 + ", " + y_an_25_mp;
        document.getElementById("polyline_an_25_p").setAttribute("points", string);
    // Margo Gingivae 25 palatinal zeichnen
        var string =
            x_dp_25 + ", " + y_mg_25_dp + "  " + 
            x_p_25 + ", " + y_mg_25_p + "  " + 
            x_mp_25 + ", " + y_mg_25_mp;
        document.getElementById("polyline_mg_25_p").setAttribute("points", string);
    }
    if (Zahn_25 == 1 && Tooth_24 == 1) {

        st_24_db = document.forms[0]["st_24_db"].value;
        mg_24_db = document.forms[0]["mg_24_db"].value;
        
        st_24_dp = document.forms[0]["st_24_dp"].value;
        mg_24_dp = document.forms[0]["mg_24_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
        var x_db_24 = 855;							// distal 24
        
    // Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
        var x_dp_24 = 854;							// distal 24
        
    // Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
        var y_mg_24_db = mg_OK_b + 6.5 * mg_24_db;	// Margo Gingivae distobukkal 24
        var y_st_24_db = 6.5 * st_24_db;			// Sondierungstiefe distobukkal 24
        
    // Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
        var y_mg_24_dp = mg_OK_p - 6.5 * mg_24_dp;	// Margo Gingivae distopalatinal 24
        var y_st_24_dp = 6.5 * st_24_dp;			// Sondierungstiefe distopalatinal 24
        
    // Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_24_db = y_mg_24_db - y_st_24_db;	// Attachmentniveau distobukkal 24
        
    // Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_24_dp = y_mg_24_dp + y_st_24_dp;	// Attachmentniveau distopalatinal 24

    // Parodontaltasche inter_25_24 bukkal zeichnen
        var string = 
            x_mb_25 + ", " + y_an_25_mb + "  " + 
            x_db_24 + ", " + y_an_24_db + "  " + 
            x_db_24 + ", " + y_mg_24_db + "  " + 
            x_mb_25 + ", " + y_mg_25_mb;
        document.getElementById("polygon_inter_25_24_b").setAttribute("points", string);
    // Attachmentniveau inter_25_24 bukkal zeichnen
        var string = 
            x_mb_25 + ", " + y_an_25_mb + "  " + 
            x_db_24 + ", " + y_an_24_db;
        document.getElementById("polyline_an_inter_25_24_b").setAttribute("points", string);
    // Margo Gingivae inter_25_24 bukkal zeichnen
        var string =
            x_mb_25 + ", " + y_mg_25_mb + "  " + 
            x_db_24 + ", " + y_mg_24_db;
        document.getElementById("polyline_mg_inter_25_24_b").setAttribute("points", string);

    // Parodontaltasche inter_25_24 palatinal zeichnen
        var string = 
            x_mp_25 + ", " + y_an_25_mp + "  " + 
            x_dp_24 + ", " + y_an_24_dp + "  " + 
            x_dp_24 + ", " + y_mg_24_dp + "  " + 
            x_mp_25 + ", " + y_mg_25_mp;
        document.getElementById("polygon_inter_25_24_p").setAttribute("points", string);
    // Attachmentniveau inter_25_24 palatinal zeichnen
        var string = 
            x_mp_25 + ", " + y_an_25_mp + "  " + 
            x_dp_24 + ", " + y_an_24_dp;
        document.getElementById("polyline_an_inter_25_24_p").setAttribute("points", string);
    // Margo Gingivae inter_25_24 palatinal zeichnen
        var string =
            x_mp_25 + ", " + y_mg_25_mp + "  " + 
            x_dp_24 + ", " + y_mg_24_dp;
        document.getElementById("polyline_mg_inter_25_24_p").setAttribute("points", string);
    }
    if (Zahn_26 == 1 && Zahn_25 == 1) {

        st_26_mb = document.forms[0]["st_26_mb"].value;
        mg_26_mb = document.forms[0]["mg_26_mb"].value;
        
        st_26_mp = document.forms[0]["st_26_mp"].value;
        mg_26_mp = document.forms[0]["mg_26_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
        var x_mb_26 = 907;							// mesial 26
        
    // Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
        var x_mp_26 = 912;							// mesial 26
        
    // Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
        var y_mg_26_mb = mg_OK_b + 6.5 * mg_26_mb;	// Margo Gingivae mesiobukkal 26
        var y_st_26_mb = 6.5 * st_26_mb;			// Sondierungstiefe mesiobukkal 26
        
    // Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
        var y_mg_26_mp = mg_OK_p - 6.5 * mg_26_mp;	// Margo Gingivae mesiopalatinal 26
        var y_st_26_mp = 6.5 * st_26_mp;			// Sondierungstiefe mesiopalatinal 26
        
    // Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_26_mb = y_mg_26_mb - y_st_26_mb;	// Attachmentniveau mesiobukkal 26
        
    // Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_26_mp = y_mg_26_mp + y_st_26_mp;	// Attachmentniveau mesiopalatinal 26

    // Parodontaltasche inter_26_25 bukkal zeichnen
        var string = 
            x_mb_26 + ", " + y_an_26_mb + "  " + 
            x_db_25 + ", " + y_an_25_db + "  " + 
            x_db_25 + ", " + y_mg_25_db + "  " + 
            x_mb_26 + ", " + y_mg_26_mb;
        document.getElementById("polygon_inter_26_25_b").setAttribute("points", string);
    // Attachmentniveau inter_26_25 bukkal zeichnen
        var string = 
            x_mb_26 + ", " + y_an_26_mb + "  " + 
            x_db_25 + ", " + y_an_25_db;
        document.getElementById("polyline_an_inter_26_25_b").setAttribute("points", string);
    // Margo Gingivae inter_26_25 bukkal zeichnen
        var string =
            x_mb_26 + ", " + y_mg_26_mb + "  " + 
            x_db_25 + ", " + y_mg_25_db;
        document.getElementById("polyline_mg_inter_26_25_b").setAttribute("points", string);

    // Parodontaltasche inter_26_25 palatinal zeichnen
        var string = 
            x_mp_26 + ", " + y_an_26_mp + "  " + 
            x_dp_25 + ", " + y_an_25_dp + "  " + 
            x_dp_25 + ", " + y_mg_25_dp + "  " + 
            x_mp_26 + ", " + y_mg_26_mp;
        document.getElementById("polygon_inter_26_25_p").setAttribute("points", string);
    // Attachmentniveau inter_26_25 palatinal zeichnen
        var string = 
            x_mp_26 + ", " + y_an_26_mp + "  " + 
            x_dp_25 + ", " + y_an_25_dp;
        document.getElementById("polyline_an_inter_26_25_p").setAttribute("points", string);
    // Margo Gingivae inter_26_25 palatinal zeichnen
        var string =
            x_mp_26 + ", " + y_mg_26_mp + "  " + 
            x_dp_25 + ", " + y_mg_25_dp;
        document.getElementById("polyline_mg_inter_26_25_p").setAttribute("points", string);
    }
}