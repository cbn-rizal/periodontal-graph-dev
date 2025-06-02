	// Definition der Variablen fÃ¼r das Formular
    var Tooth_13 = 1;
    var Implantat_13 = 0;
    var BOP_13_db = 0;
    var BOP_13_b = 0;
    var BOP_13_mb = 0;
    var PI_13_db = 0;
    var PI_13_b = 0;
    var PI_13_mb = 0;
    var BOP_13_dp = 0;
    var BOP_13_p = 0;
    var BOP_13_mp = 0;
    var PI_13_dp = 0;
    var PI_13_p = 0;
    var PI_13_mp = 0;
    var mg_13_db = 0;
    var mg_13_b = 0;
    var mg_13_mb = 0;
    var st_13_db = 0;
    var st_13_b = 0;
    var st_13_mb = 0;
    var mg_13_dp = 0;
    var mg_13_p = 0;
    var mg_13_mp = 0;
    var st_13_dp = 0;
    var st_13_p = 0;
    var st_13_mp = 0;

function clear_data_13() {
    if (Tooth_13 == 1) {
        mg_13_db = 0;
        mg_13_b = 0;
        mg_13_mb = 0;
        st_13_db = 0;
        st_13_b = 0;
        st_13_mb = 0;

            document.getElementById('mg_13_db_txt').value = 0;
            document.getElementById('mg_13_b_txt').value = 0;
            document.getElementById('mg_13_mb_txt').value = 0;
            
            document.getElementById('st_13_db_txt').value = 0;
            document.getElementById('st_13_b_txt').value = 0;
            document.getElementById('st_13_mb_txt').value = 0;
        
            document.forms[0]["st_13_db"].style.color = 'black'
            document.forms[0]["st_13_b"].style.color = 'black'
            document.forms[0]["st_13_mb"].style.color = 'black'
        
        mg_13_dp = 0;
        mg_13_p = 0;
        mg_13_mp = 0;
        st_13_dp = 0;
        st_13_p = 0;
        st_13_mp = 0;

            document.getElementById('mg_13_dp_txt').value = 0;
            document.getElementById('mg_13_p_txt').value = 0;
            document.getElementById('mg_13_mp_txt').value = 0;
            
            document.getElementById('st_13_dp_txt').value = 0;
            document.getElementById('st_13_p_txt').value = 0;
            document.getElementById('st_13_mp_txt').value = 0;

            document.forms[0]["st_13_dp"].style.color = 'black'
            document.forms[0]["st_13_p"].style.color = 'black'
            document.forms[0]["st_13_mp"].style.color = 'black'
        
        change_probing_13();
        
        mobility_13 = 0;

            document.getElementById('mobility_13_txt').value = "0";

        note_13 = "";

            document.getElementById('note_13_txt').value = "";

        BOP_13_db = 0;
        BOP_13_b = 0;
        BOP_13_mb = 0;
                
        BOP_13_dp = 0;
        BOP_13_p = 0;
        BOP_13_mp = 0;
                
            document.getElementById('BOP_13_db_rectangle').style.display = 'none';
            document.getElementById('BOP_13_b_rectangle').style.display = 'none';
            document.getElementById('BOP_13_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_13_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_13_p_rectangle').style.display = 'none';
            document.getElementById('BOP_13_mp_rectangle').style.display = 'none';
            
        PI_13_db = 0;
        PI_13_b = 0;
        PI_13_mb = 0;
                
        PI_13_dp = 0;
        PI_13_p = 0;
        PI_13_mp = 0;

            document.getElementById('PI_13_db_rectangle').style.display = 'none';
            document.getElementById('PI_13_b_rectangle').style.display = 'none';
            document.getElementById('PI_13_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_13_dp_rectangle').style.display = 'none';
            document.getElementById('PI_13_p_rectangle').style.display = 'none';
            document.getElementById('PI_13_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_13() {
    if (Tooth_13 === 1) {
        Tooth_13 = 0;
        document.getElementById('tooth_line_13_b').style.display = 'block';
        document.getElementById('tooth_line_13_p').style.display = 'block';
        
        document.getElementById('mobility_13_txt').style.display = 'none';
        
        document.getElementById('implantat_13_btn').style.display = 'none';
        document.getElementById('implantat_13_tab').style.display = 'none';
        document.getElementById('implantat_13_b_image').style.display = 'none';
        document.getElementById('implantat_13_p_image').style.display = 'none';
        
        document.getElementById('mg_13_db_txt').style.display = 'none';
        document.getElementById('mg_13_b_txt').style.display = 'none';
        document.getElementById('mg_13_mb_txt').style.display = 'none';
        
        document.getElementById('st_13_db_txt').style.display = 'none';
        document.getElementById('st_13_b_txt').style.display = 'none';
        document.getElementById('st_13_mb_txt').style.display = 'none';
        
        document.getElementById('mg_13_dp_txt').style.display = 'none';
        document.getElementById('mg_13_p_txt').style.display = 'none';
        document.getElementById('mg_13_mp_txt').style.display = 'none';
        
        document.getElementById('st_13_dp_txt').style.display = 'none';
        document.getElementById('st_13_p_txt').style.display = 'none';
        document.getElementById('st_13_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_13_db_rectangle').style.display = 'none';
        document.getElementById('BOP_13_b_rectangle').style.display = 'none';
        document.getElementById('BOP_13_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_13_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_13_p_rectangle').style.display = 'none';
        document.getElementById('BOP_13_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_13_db_btn').style.display = 'none';
        document.getElementById('BOP_13_b_btn').style.display = 'none';
        document.getElementById('BOP_13_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_13_dp_btn').style.display = 'none';
        document.getElementById('BOP_13_p_btn').style.display = 'none';
        document.getElementById('BOP_13_mp_btn').style.display = 'none';
        
        document.getElementById('PI_13_db_rectangle').style.display = 'none';
        document.getElementById('PI_13_b_rectangle').style.display = 'none';
        document.getElementById('PI_13_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_13_dp_rectangle').style.display = 'none';
        document.getElementById('PI_13_p_rectangle').style.display = 'none';
        document.getElementById('PI_13_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_13_db_btn').style.display = 'none';
        document.getElementById('PI_13_b_btn').style.display = 'none';
        document.getElementById('PI_13_mb_btn').style.display = 'none';
        
        document.getElementById('PI_13_dp_btn').style.display = 'none';
        document.getElementById('PI_13_p_btn').style.display = 'none';
        document.getElementById('PI_13_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_13_b').style.display = 'none';
        document.getElementById('polyline_an_13_b').style.display = 'none';
        document.getElementById('polyline_mg_13_b').style.display = 'none';
        
        document.getElementById('polygon_13_p').style.display = 'none';
        document.getElementById('polyline_an_13_p').style.display = 'none';
        document.getElementById('polyline_mg_13_p').style.display = 'none';
        
        document.getElementById('polygon_inter_14_13_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_14_13_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_14_13_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_14_13_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_14_13_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_14_13_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_13_12_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_13_12_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_13_12_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_13_12_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_13_12_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_13_12_p').style.display = 'none';            
        
        document.getElementById('note_13_txt').style.display = 'none';
    }
    else if (Implantat_13 !== 1) {
        Tooth_13 = 1;
        document.getElementById('tooth_line_13_b').style.display = 'none';
        document.getElementById('tooth_line_13_p').style.display = 'none';

        document.getElementById('mobility_13_txt').style.display = 'block';

        document.getElementById('implantat_13_btn').style.display = 'block';

        document.getElementById('mg_13_db_txt').style.display = 'block';
        document.getElementById('mg_13_b_txt').style.display = 'block';
        document.getElementById('mg_13_mb_txt').style.display = 'block';
        
        document.getElementById('st_13_db_txt').style.display = 'block';
        document.getElementById('st_13_b_txt').style.display = 'block';
        document.getElementById('st_13_mb_txt').style.display = 'block';
        
        document.getElementById('mg_13_dp_txt').style.display = 'block';
        document.getElementById('mg_13_p_txt').style.display = 'block';
        document.getElementById('mg_13_mp_txt').style.display = 'block';
        
        document.getElementById('st_13_dp_txt').style.display = 'block';
        document.getElementById('st_13_p_txt').style.display = 'block';
        document.getElementById('st_13_mp_txt').style.display = 'block';
        
        document.getElementById('note_13_txt').style.display = 'block';

        document.getElementById('polygon_13_b').style.display = 'block';
        document.getElementById('polyline_an_13_b').style.display = 'block';
        document.getElementById('polyline_mg_13_b').style.display = 'block';
        
        document.getElementById('polygon_13_p').style.display = 'block';
        document.getElementById('polyline_an_13_p').style.display = 'block';
        document.getElementById('polyline_mg_13_p').style.display = 'block';

        if (Tooth_14 == 1 && Tooth_13 == 1) {
            document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_p').style.display = 'block';            
        }
        
        if (Tooth_13 == 1 && Zahn_12 == 1) {
            document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_p').style.display = 'block';            
        }
        
        document.getElementById('BOP_13_db_btn').style.display = 'block';
        document.getElementById('BOP_13_b_btn').style.display = 'block';
        document.getElementById('BOP_13_mb_btn').style.display = 'block';

        document.getElementById('BOP_13_dp_btn').style.display = 'block';
        document.getElementById('BOP_13_p_btn').style.display = 'block';
        document.getElementById('BOP_13_mp_btn').style.display = 'block';
        
        if (BOP_13_db == 1) {
            document.getElementById('BOP_13_db_rectangle').style.display = 'block';
        }
        if (BOP_13_b == 1) {
            document.getElementById('BOP_13_b_rectangle').style.display = 'block';
        }
        if (BOP_13_mb == 1) {
            document.getElementById('BOP_13_mb_rectangle').style.display = 'block';
        }
        if (BOP_13_dp == 1) {
            document.getElementById('BOP_13_dp_rectangle').style.display = 'block';
        }
        if (BOP_13_p == 1) {
            document.getElementById('BOP_13_p_rectangle').style.display = 'block';
        }
        if (BOP_13_mp == 1) {
            document.getElementById('BOP_13_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_13_db_btn').style.display = 'block';
        document.getElementById('PI_13_b_btn').style.display = 'block';
        document.getElementById('PI_13_mb_btn').style.display = 'block';

        document.getElementById('PI_13_dp_btn').style.display = 'block';
        document.getElementById('PI_13_p_btn').style.display = 'block';
        document.getElementById('PI_13_mp_btn').style.display = 'block';
        
        if (PI_13_db == 1) {
            document.getElementById('PI_13_db_rectangle').style.display = 'block';
        }
        if (PI_13_b == 1) {
            document.getElementById('PI_13_b_rectangle').style.display = 'block';
        }
        if (PI_13_mb == 1) {
            document.getElementById('PI_13_mb_rectangle').style.display = 'block';
        }
        if (PI_13_dp == 1) {
            document.getElementById('PI_13_dp_rectangle').style.display = 'block';
        }
        if (PI_13_p == 1) {
            document.getElementById('PI_13_p_rectangle').style.display = 'block';
        }
        if (PI_13_mp == 1) {
            document.getElementById('PI_13_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_13 == 1) {
        Tooth_13 = 1;
        document.getElementById('tooth_line_13_b').style.display = 'none';
        document.getElementById('tooth_line_13_p').style.display = 'none';

        document.getElementById('mobility_13_txt').style.display = 'block';
        
        document.getElementById('note_13_txt').style.display = 'block';

        document.getElementById('implantat_13_btn').style.display = 'block';
        document.getElementById('implantat_13_tab').style.display = 'block';
        document.getElementById('implantat_13_b_image').style.display = 'block';
        document.getElementById('implantat_13_p_image').style.display = 'block';

        document.getElementById('mg_13_db_txt').style.display = 'block';
        document.getElementById('mg_13_b_txt').style.display = 'block';
        document.getElementById('mg_13_mb_txt').style.display = 'block';
        
        document.getElementById('st_13_db_txt').style.display = 'block';
        document.getElementById('st_13_b_txt').style.display = 'block';
        document.getElementById('st_13_mb_txt').style.display = 'block';
        
        document.getElementById('mg_13_dp_txt').style.display = 'block';
        document.getElementById('mg_13_p_txt').style.display = 'block';
        document.getElementById('mg_13_mp_txt').style.display = 'block';
        
        document.getElementById('st_13_dp_txt').style.display = 'block';
        document.getElementById('st_13_p_txt').style.display = 'block';
        document.getElementById('st_13_mp_txt').style.display = 'block';

        document.getElementById('polygon_13_b').style.display = 'block';
        document.getElementById('polyline_an_13_b').style.display = 'block';
        document.getElementById('polyline_mg_13_b').style.display = 'block';
        
        document.getElementById('polygon_13_p').style.display = 'block';
        document.getElementById('polyline_an_13_p').style.display = 'block';
        document.getElementById('polyline_mg_13_p').style.display = 'block';

        if (Tooth_14 == 1 && Tooth_13 == 1) {
            document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_p').style.display = 'block';            
        }
        
        if (Tooth_13 == 1 && Zahn_12 == 1) {
            document.getElementById('polygon_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_13_12_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_13_12_p').style.display = 'block';            
        }

        document.getElementById('BOP_13_db_btn').style.display = 'block';
        document.getElementById('BOP_13_b_btn').style.display = 'block';
        document.getElementById('BOP_13_mb_btn').style.display = 'block';

        document.getElementById('BOP_13_dp_btn').style.display = 'block';
        document.getElementById('BOP_13_p_btn').style.display = 'block';
        document.getElementById('BOP_13_mp_btn').style.display = 'block';
        
        document.getElementById('PI_13_db_btn').style.display = 'block';
        document.getElementById('PI_13_b_btn').style.display = 'block';
        document.getElementById('PI_13_mb_btn').style.display = 'block';

        document.getElementById('PI_13_dp_btn').style.display = 'block';
        document.getElementById('PI_13_p_btn').style.display = 'block';
        document.getElementById('PI_13_mp_btn').style.display = 'block';
        
        if (BOP_13_db == 1) {
            document.getElementById('BOP_13_db_rectangle').style.display = 'block';
        }
        if (BOP_13_b == 1) {
            document.getElementById('BOP_13_b_rectangle').style.display = 'block';
        }
        if (BOP_13_mb == 1) {
            document.getElementById('BOP_13_mb_rectangle').style.display = 'block';
        }
        if (BOP_13_dp == 1) {
            document.getElementById('BOP_13_dp_rectangle').style.display = 'block';
        }
        if (BOP_13_p == 1) {
            document.getElementById('BOP_13_p_rectangle').style.display = 'block';
        }
        if (BOP_13_mp == 1) {
            document.getElementById('BOP_13_mp_rectangle').style.display = 'block';
        }
        
        if (PI_13_db == 1) {
            document.getElementById('PI_13_db_rectangle').style.display = 'block';
        }
        if (PI_13_b == 1) {
            document.getElementById('PI_13_b_rectangle').style.display = 'block';
        }
        if (PI_13_mb == 1) {
            document.getElementById('PI_13_mb_rectangle').style.display = 'block';
        }
        if (PI_13_dp == 1) {
            document.getElementById('PI_13_dp_rectangle').style.display = 'block';
        }
        if (PI_13_p == 1) {
            document.getElementById('PI_13_p_rectangle').style.display = 'block';
        }
        if (PI_13_mp == 1) {
            document.getElementById('PI_13_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_13() {
    if (Implantat_13 == 0) {
        Implantat_13 = 1;
        
        document.getElementById('implantat_13_b_image').style.display = 'block';
        document.getElementById('implantat_13_p_image').style.display = 'block';
        document.getElementById('implantat_13_tab').style.display = 'block';
    }
    else {
        Implantat_13 = 0;
        
        document.getElementById('implantat_13_b_image').style.display = 'none';
        document.getElementById('implantat_13_p_image').style.display = 'none';
        document.getElementById('implantat_13_tab').style.display = 'none';
    }
}

function toggle_BOP_13_db() {
    if (BOP_13_db == 0) {
        BOP_13_db = 1;
        document.getElementById('BOP_13_db_rectangle').style.display = 'block';
    }
    else {
        BOP_13_db = 0;
        document.getElementById('BOP_13_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_13_b() {
    if (BOP_13_b == 0) {
        BOP_13_b = 1;
        document.getElementById('BOP_13_b_rectangle').style.display = 'block';
    }
    else {
        BOP_13_b = 0;
        document.getElementById('BOP_13_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_13_mb() {
    if (BOP_13_mb == 0) {
        BOP_13_mb = 1;
        document.getElementById('BOP_13_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_13_mb = 0;
        document.getElementById('BOP_13_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_13_db() {
    if (PI_13_db == 0) {
        PI_13_db = 1;
        document.getElementById('PI_13_db_rectangle').style.display = 'block';
    }
    else {
        PI_13_db = 0;
        document.getElementById('PI_13_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_13_b() {
    if (PI_13_b == 0) {
        PI_13_b = 1;
        document.getElementById('PI_13_b_rectangle').style.display = 'block';
    }
    else {
        PI_13_b = 0;
        document.getElementById('PI_13_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_13_mb() {
    if (PI_13_mb == 0) {
        PI_13_mb = 1;
        document.getElementById('PI_13_mb_rectangle').style.display = 'block';
    }
    else {
        PI_13_mb = 0;
        document.getElementById('PI_13_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_13_dp() {
    if (BOP_13_dp == 0) {
        BOP_13_dp = 1;
        document.getElementById('BOP_13_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_13_dp = 0;
        document.getElementById('BOP_13_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_13_p() {
    if (BOP_13_p == 0) {
        BOP_13_p = 1;
        document.getElementById('BOP_13_p_rectangle').style.display = 'block';
    }
    else {
        BOP_13_p = 0;
        document.getElementById('BOP_13_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_13_mp() {
    if (BOP_13_mp == 0) {
        BOP_13_mp = 1;
        document.getElementById('BOP_13_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_13_mp = 0;
        document.getElementById('BOP_13_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_13_dp() {
    if (PI_13_dp == 0) {
        PI_13_dp = 1;
        document.getElementById('PI_13_dp_rectangle').style.display = 'block';
    }
    else {
        PI_13_dp = 0;
        document.getElementById('PI_13_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_13_p() {
    if (PI_13_p == 0) {
        PI_13_p = 1;
        document.getElementById('PI_13_p_rectangle').style.display = 'block';
    }
    else {
        PI_13_p = 0;
        document.getElementById('PI_13_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_13_mp() {
    if (PI_13_mp == 0) {
        PI_13_mp = 1;
        document.getElementById('PI_13_mp_rectangle').style.display = 'block';
    }
    else {
        PI_13_mp = 0;
        document.getElementById('PI_13_mp_rectangle').style.display = 'none';
    }
}

function change_probing_13() {
    if (Tooth_13 == 1) {
        
    // Variablen aus dem Formular
        st_13_db = document.forms[0]["st_13_db"].value;
        st_13_b = document.forms[0]["st_13_b"].value;
        st_13_mb = document.forms[0]["st_13_mb"].value;

        if (document.forms[0]["st_13_dp"].value > 3) {document.forms[0]["st_13_dp"].style.color = 'red';} else {document.forms[0]["st_13_dp"].style.color = 'black'}
        if (document.forms[0]["st_13_p"].value > 3) {document.forms[0]["st_13_p"].style.color = 'red';} else {document.forms[0]["st_13_p"].style.color = 'black'}
        if (document.forms[0]["st_13_mp"].value > 3) {document.forms[0]["st_13_mp"].style.color = 'red';} else {document.forms[0]["st_13_mp"].style.color = 'black'}
        
        mg_13_db = document.forms[0]["mg_13_db"].value;
        mg_13_b = document.forms[0]["mg_13_b"].value;
        mg_13_mb = document.forms[0]["mg_13_mb"].value;
        
        st_13_dp = document.forms[0]["st_13_dp"].value;
        st_13_p = document.forms[0]["st_13_p"].value;
        st_13_mp = document.forms[0]["st_13_mp"].value;

        if (document.forms[0]["st_13_db"].value > 3) {document.forms[0]["st_13_db"].style.color = 'red';} else {document.forms[0]["st_13_db"].style.color = 'black'}
        if (document.forms[0]["st_13_b"].value > 3) {document.forms[0]["st_13_b"].style.color = 'red';} else {document.forms[0]["st_13_b"].style.color = 'black'}
        if (document.forms[0]["st_13_mb"].value > 3) {document.forms[0]["st_13_mb"].style.color = 'red';} else {document.forms[0]["st_13_mb"].style.color = 'black'}
        
        mg_13_dp = document.forms[0]["mg_13_dp"].value;
        mg_13_p = document.forms[0]["mg_13_p"].value;
        mg_13_mp = document.forms[0]["mg_13_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
        var x_db_13 = 544;							// distal 13
        var x_mb_13 = 570;							// mesial 13
        var x_b_13 = (x_db_13 + x_mb_13)/2;			// bukkal 13
        
    // Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
        var x_dp_13 = 546;							// distal 13
        var x_mp_13 = 573;							// mesial 13
        var x_p_13 = (x_dp_13 + x_mp_13)/2;			// palatinal 13
        
    // Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
        var y_mg_13_db = mg_OK_b + 6.5 * mg_13_db;	// Margo Gingivae distobukkal 13
        var y_mg_13_b = mg_OK_b + 6.5 * mg_13_b;	// Margo Gingivae bukkal 13
        var y_mg_13_mb = mg_OK_b + 6.5 * mg_13_mb;	// Margo Gingivae mesiobukkal 13
        var y_st_13_db = 6.5 * st_13_db;			// Sondierungstiefe distobukkal 13
        var y_st_13_b = 6.5 * st_13_b;				// Sondierungstiefe bukkal 13
        var y_st_13_mb = 6.5 * st_13_mb;			// Sondierungstiefe mesiobukkal 13
        
    // Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
        var y_mg_13_dp = mg_OK_p - 6.5 * mg_13_dp;	// Margo Gingivae distopalatinal 13
        var y_mg_13_p = mg_OK_p - 6.5 * mg_13_p;	// Margo Gingivae palatinal 13
        var y_mg_13_mp = mg_OK_p - 6.5 * mg_13_mp;	// Margo Gingivae mesiopalatinal 13
        var y_st_13_dp = 6.5 * st_13_dp;			// Sondierungstiefe distopalatinal 13
        var y_st_13_p = 6.5 * st_13_p;				// Sondierungstiefe palatinal 13
        var y_st_13_mp = 6.5 * st_13_mp;			// Sondierungstiefe mesiopalatinal 13
        
    // Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_13_db = y_mg_13_db - y_st_13_db;	// Attachmentniveau distobukkal 13
        var y_an_13_b = y_mg_13_b - y_st_13_b;		// Attachmentniveau bukkal 13
        var y_an_13_mb = y_mg_13_mb - y_st_13_mb;	// Attachmentniveau mesiobukkal 13
        
    // Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_13_dp = y_mg_13_dp + y_st_13_dp;	// Attachmentniveau distopalatinal 13
        var y_an_13_p = y_mg_13_p + y_st_13_p;		// Attachmentniveau palatinal 13
        var y_an_13_mp = y_mg_13_mp + y_st_13_mp;	// Attachmentniveau mesiopalatinal 13
        
    // Parodontaltasche 13 bukkal zeichnen
        var string = 
            x_db_13 + ", " + y_an_13_db + "  " + 
            x_b_13 + ", " + y_an_13_b + "  " + 
            x_mb_13 + ", " + y_an_13_mb + "  " + 
            x_mb_13 + ", " + y_mg_13_mb + "  " + 
            x_b_13 + ", " + y_mg_13_b + "  " + 
            x_db_13 + ", " + y_mg_13_db;
        document.getElementById("polygon_13_b").setAttribute("points", string);
    // Attachmentniveau 13 bukkal zeichnen
        var string = 
            x_db_13 + ", " + y_an_13_db + "  " + 
            x_b_13 + ", " + y_an_13_b + "  " + 
            x_mb_13 + ", " + y_an_13_mb;
        document.getElementById("polyline_an_13_b").setAttribute("points", string);
    // Margo Gingivae 13 bukkal zeichnen
        var string =
            x_db_13 + ", " + y_mg_13_db + "  " + 
            x_b_13 + ", " + y_mg_13_b + "  " + 
            x_mb_13 + ", " + y_mg_13_mb;
        document.getElementById("polyline_mg_13_b").setAttribute("points", string);

    // Parodontaltasche 13 palatinal zeichnen
        var string = 
            x_dp_13 + ", " + y_an_13_dp + "  " + 
            x_p_13 + ", " + y_an_13_p + "  " + 
            x_mp_13 + ", " + y_an_13_mp + "  " + 
            x_mp_13 + ", " + y_mg_13_mp + "  " + 
            x_p_13 + ", " + y_mg_13_p + "  " + 
            x_dp_13 + ", " + y_mg_13_dp;
        document.getElementById("polygon_13_p").setAttribute("points", string);
    // Attachmentniveau 13 palatinal zeichnen
        var string = 
            x_dp_13 + ", " + y_an_13_dp + "  " + 
            x_p_13 + ", " + y_an_13_p + "  " + 
            x_mp_13 + ", " + y_an_13_mp;
        document.getElementById("polyline_an_13_p").setAttribute("points", string);
    // Margo Gingivae 13 palatinal zeichnen
        var string =
            x_dp_13 + ", " + y_mg_13_dp + "  " + 
            x_p_13 + ", " + y_mg_13_p + "  " + 
            x_mp_13 + ", " + y_mg_13_mp;
        document.getElementById("polyline_mg_13_p").setAttribute("points", string);
    }
    if (Tooth_13 == 1 && Zahn_12 == 1) {

        st_12_db = document.forms[0]["st_12_db"].value;
        mg_12_db = document.forms[0]["mg_12_db"].value;
        
        st_12_dp = document.forms[0]["st_12_dp"].value;
        mg_12_dp = document.forms[0]["mg_12_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 12 (bukkal) in der Bitmap
        var x_db_12 = 588;							// distal 12
        
    // Set der horizontalen Koordinaten von Zahn 12 (palatinal) in der Bitmap
        var x_dp_12 = 586;							// distal 12
        
    // Set der vertikalen Koordinaten von Zahn 12 (bukkal) aus dem Formular
        var y_mg_12_db = mg_OK_b + 6.5 * mg_12_db;	// Margo Gingivae distobukkal 12
        var y_st_12_db = 6.5 * st_12_db;			// Sondierungstiefe distobukkal 12
        
    // Set der vertikalen Koordinaten von Zahn 12 (palatinal) aus dem Formular
        var y_mg_12_dp = mg_OK_p - 6.5 * mg_12_dp;	// Margo Gingivae distopalatinal 12
        var y_st_12_dp = 6.5 * st_12_dp;			// Sondierungstiefe distopalatinal 12
        
    // Berechnung des Attachmentniveaus 12 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_12_db = y_mg_12_db - y_st_12_db;	// Attachmentniveau distobukkal 12
        
    // Berechnung des Attachmentniveaus 12 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_12_dp = y_mg_12_dp + y_st_12_dp;	// Attachmentniveau distopalatinal 12

    // Parodontaltasche inter_13_12 bukkal zeichnen
        var string = 
            x_mb_13 + ", " + y_an_13_mb + "  " + 
            x_db_12 + ", " + y_an_12_db + "  " + 
            x_db_12 + ", " + y_mg_12_db + "  " + 
            x_mb_13 + ", " + y_mg_13_mb;
        document.getElementById("polygon_inter_13_12_b").setAttribute("points", string);
    // Attachmentniveau inter_13_12 bukkal zeichnen
        var string = 
            x_mb_13 + ", " + y_an_13_mb + "  " + 
            x_db_12 + ", " + y_an_12_db;
        document.getElementById("polyline_an_inter_13_12_b").setAttribute("points", string);
    // Margo Gingivae inter_13_12 bukkal zeichnen
        var string =
            x_mb_13 + ", " + y_mg_13_mb + "  " + 
            x_db_12 + ", " + y_mg_12_db;
        document.getElementById("polyline_mg_inter_13_12_b").setAttribute("points", string);

    // Parodontaltasche inter_13_12 palatinal zeichnen
        var string = 
            x_mp_13 + ", " + y_an_13_mp + "  " + 
            x_dp_12 + ", " + y_an_12_dp + "  " + 
            x_dp_12 + ", " + y_mg_12_dp + "  " + 
            x_mp_13 + ", " + y_mg_13_mp;
        document.getElementById("polygon_inter_13_12_p").setAttribute("points", string);
    // Attachmentniveau inter_13_12 palatinal zeichnen
        var string = 
            x_mp_13 + ", " + y_an_13_mp + "  " + 
            x_dp_12 + ", " + y_an_12_dp;
        document.getElementById("polyline_an_inter_13_12_p").setAttribute("points", string);
    // Margo Gingivae inter_13_12 palatinal zeichnen
        var string =
            x_mp_13 + ", " + y_mg_13_mp + "  " + 
            x_dp_12 + ", " + y_mg_12_dp;
        document.getElementById("polyline_mg_inter_13_12_p").setAttribute("points", string);
    }
    if (Tooth_14 == 1 && Tooth_13 == 1) {

        st_14_mb = document.forms[0]["st_14_mb"].value;
        mg_14_mb = document.forms[0]["mg_14_mb"].value;
        
        st_14_mp = document.forms[0]["st_14_mp"].value;
        mg_14_mp = document.forms[0]["mg_14_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
        var x_mb_14 = 528;							// mesial 14
        
    // Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
        var x_mp_14 = 529;							// mesial 14
        
    // Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
        var y_mg_14_mb = mg_OK_b + 6.5 * mg_14_mb;	// Margo Gingivae mesiobukkal 14
        var y_st_14_mb = 6.5 * st_14_mb;			// Sondierungstiefe mesiobukkal 14
        
    // Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
        var y_mg_14_mp = mg_OK_p - 6.5 * mg_14_mp;	// Margo Gingivae mesiopalatinal 14
        var y_st_14_mp = 6.5 * st_14_mp;			// Sondierungstiefe mesiopalatinal 14
        
    // Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_14_mb = y_mg_14_mb - y_st_14_mb;	// Attachmentniveau mesiobukkal 14
        
    // Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_14_mp = y_mg_14_mp + y_st_14_mp;	// Attachmentniveau mesiopalatinal 14

    // Parodontaltasche inter_14_13 bukkal zeichnen
        var string = 
            x_mb_14 + ", " + y_an_14_mb + "  " + 
            x_db_13 + ", " + y_an_13_db + "  " + 
            x_db_13 + ", " + y_mg_13_db + "  " + 
            x_mb_14 + ", " + y_mg_14_mb;
        document.getElementById("polygon_inter_14_13_b").setAttribute("points", string);
    // Attachmentniveau inter_14_13 bukkal zeichnen
        var string = 
            x_mb_14 + ", " + y_an_14_mb + "  " + 
            x_db_13 + ", " + y_an_13_db;
        document.getElementById("polyline_an_inter_14_13_b").setAttribute("points", string);
    // Margo Gingivae inter_14_13 bukkal zeichnen
        var string =
            x_mb_14 + ", " + y_mg_14_mb + "  " + 
            x_db_13 + ", " + y_mg_13_db;
        document.getElementById("polyline_mg_inter_14_13_b").setAttribute("points", string);

    // Parodontaltasche inter_14_13 palatinal zeichnen
        var string = 
            x_mp_14 + ", " + y_an_14_mp + "  " + 
            x_dp_13 + ", " + y_an_13_dp + "  " + 
            x_dp_13 + ", " + y_mg_13_dp + "  " + 
            x_mp_14 + ", " + y_mg_14_mp;
        document.getElementById("polygon_inter_14_13_p").setAttribute("points", string);
    // Attachmentniveau inter_14_13 palatinal zeichnen
        var string = 
            x_mp_14 + ", " + y_an_14_mp + "  " + 
            x_dp_13 + ", " + y_an_13_dp;
        document.getElementById("polyline_an_inter_14_13_p").setAttribute("points", string);
    // Margo Gingivae inter_14_13 palatinal zeichnen
        var string =
            x_mp_14 + ", " + y_mg_14_mp + "  " + 
            x_dp_13 + ", " + y_mg_13_dp;
        document.getElementById("polyline_mg_inter_14_13_p").setAttribute("points", string);
    }
}