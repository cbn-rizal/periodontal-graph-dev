	// Definition der Variablen fÃ¼r das Formular
    var Tooth_15 = 1;
    var Implantat_15 = 0;
    var BOP_15_db = 0;
    var BOP_15_b = 0;
    var BOP_15_mb = 0;
    var PI_15_db = 0;
    var PI_15_b = 0;
    var PI_15_mb = 0;
    var BOP_15_dp = 0;
    var BOP_15_p = 0;
    var BOP_15_mp = 0;
    var PI_15_dp = 0;
    var PI_15_p = 0;
    var PI_15_mp = 0;
    var mg_15_db = 0;
    var mg_15_b = 0;
    var mg_15_mb = 0;
    var st_15_db = 0;
    var st_15_b = 0;
    var st_15_mb = 0;
    var mg_15_dp = 0;
    var mg_15_p = 0;
    var mg_15_mp = 0;
    var st_15_dp = 0;
    var st_15_p = 0;
    var st_15_mp = 0;

function clear_data_15() {
    if (Tooth_15 == 1) {
        mg_15_db = 0;
        mg_15_b = 0;
        mg_15_mb = 0;
        st_15_db = 0;
        st_15_b = 0;
        st_15_mb = 0;

            document.getElementById('mg_15_db_txt').value = 0;
            document.getElementById('mg_15_b_txt').value = 0;
            document.getElementById('mg_15_mb_txt').value = 0;
            
            document.getElementById('st_15_db_txt').value = 0;
            document.getElementById('st_15_b_txt').value = 0;
            document.getElementById('st_15_mb_txt').value = 0;
        
            document.forms[0]["st_15_db"].style.color = 'black'
            document.forms[0]["st_15_b"].style.color = 'black'
            document.forms[0]["st_15_mb"].style.color = 'black'
        
        mg_15_dp = 0;
        mg_15_p = 0;
        mg_15_mp = 0;
        st_15_dp = 0;
        st_15_p = 0;
        st_15_mp = 0;

            document.getElementById('mg_15_dp_txt').value = 0;
            document.getElementById('mg_15_p_txt').value = 0;
            document.getElementById('mg_15_mp_txt').value = 0;
            
            document.getElementById('st_15_dp_txt').value = 0;
            document.getElementById('st_15_p_txt').value = 0;
            document.getElementById('st_15_mp_txt').value = 0;

            document.forms[0]["st_15_dp"].style.color = 'black'
            document.forms[0]["st_15_p"].style.color = 'black'
            document.forms[0]["st_15_mp"].style.color = 'black'
        
        change_probing_15();
        
        mobility_15 = 0;

            document.getElementById('mobility_15_txt').value = "0";

        note_15 = "";

            document.getElementById('note_15_txt').value = "";

        BOP_15_db = 0;
        BOP_15_b = 0;
        BOP_15_mb = 0;
                
        BOP_15_dp = 0;
        BOP_15_p = 0;
        BOP_15_mp = 0;
                
            document.getElementById('BOP_15_db_rectangle').style.display = 'none';
            document.getElementById('BOP_15_b_rectangle').style.display = 'none';
            document.getElementById('BOP_15_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_15_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_15_p_rectangle').style.display = 'none';
            document.getElementById('BOP_15_mp_rectangle').style.display = 'none';
            
        PI_15_db = 0;
        PI_15_b = 0;
        PI_15_mb = 0;
                
        PI_15_dp = 0;
        PI_15_p = 0;
        PI_15_mp = 0;

            document.getElementById('PI_15_db_rectangle').style.display = 'none';
            document.getElementById('PI_15_b_rectangle').style.display = 'none';
            document.getElementById('PI_15_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_15_dp_rectangle').style.display = 'none';
            document.getElementById('PI_15_p_rectangle').style.display = 'none';
            document.getElementById('PI_15_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_15() {
    if (Tooth_15 === 1) {
        Tooth_15 = 0;
        document.getElementById('tooth_line_15_b').style.display = 'block';
        document.getElementById('tooth_line_15_p').style.display = 'block';
        
        document.getElementById('mobility_15_txt').style.display = 'none';
        
        document.getElementById('implantat_15_btn').style.display = 'none';
        document.getElementById('implantat_15_tab').style.display = 'none';
        document.getElementById('implantat_15_b_image').style.display = 'none';
        document.getElementById('implantat_15_p_image').style.display = 'none';

        document.getElementById('mg_15_db_txt').style.display = 'none';
        document.getElementById('mg_15_b_txt').style.display = 'none';
        document.getElementById('mg_15_mb_txt').style.display = 'none';
        
        document.getElementById('st_15_db_txt').style.display = 'none';
        document.getElementById('st_15_b_txt').style.display = 'none';
        document.getElementById('st_15_mb_txt').style.display = 'none';
        
        document.getElementById('mg_15_dp_txt').style.display = 'none';
        document.getElementById('mg_15_p_txt').style.display = 'none';
        document.getElementById('mg_15_mp_txt').style.display = 'none';
        
        document.getElementById('st_15_dp_txt').style.display = 'none';
        document.getElementById('st_15_p_txt').style.display = 'none';
        document.getElementById('st_15_mp_txt').style.display = 'none';
                    
        document.getElementById('BOP_15_db_rectangle').style.display = 'none';
        document.getElementById('BOP_15_b_rectangle').style.display = 'none';
        document.getElementById('BOP_15_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_15_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_15_p_rectangle').style.display = 'none';
        document.getElementById('BOP_15_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_15_db_btn').style.display = 'none';
        document.getElementById('BOP_15_b_btn').style.display = 'none';
        document.getElementById('BOP_15_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_15_dp_btn').style.display = 'none';
        document.getElementById('BOP_15_p_btn').style.display = 'none';
        document.getElementById('BOP_15_mp_btn').style.display = 'none';
        
        document.getElementById('PI_15_db_rectangle').style.display = 'none';
        document.getElementById('PI_15_b_rectangle').style.display = 'none';
        document.getElementById('PI_15_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_15_dp_rectangle').style.display = 'none';
        document.getElementById('PI_15_p_rectangle').style.display = 'none';
        document.getElementById('PI_15_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_15_db_btn').style.display = 'none';
        document.getElementById('PI_15_b_btn').style.display = 'none';
        document.getElementById('PI_15_mb_btn').style.display = 'none';
        
        document.getElementById('PI_15_dp_btn').style.display = 'none';
        document.getElementById('PI_15_p_btn').style.display = 'none';
        document.getElementById('PI_15_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_15_b').style.display = 'none';
        document.getElementById('polyline_an_15_b').style.display = 'none';
        document.getElementById('polyline_mg_15_b').style.display = 'none';
        
        document.getElementById('polygon_15_p').style.display = 'none';
        document.getElementById('polyline_an_15_p').style.display = 'none';
        document.getElementById('polyline_mg_15_p').style.display = 'none';
        
        document.getElementById('polygon_inter_16_15_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_16_15_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_16_15_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_16_15_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_16_15_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_16_15_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_15_14_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_15_14_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_15_14_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_15_14_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_15_14_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_15_14_p').style.display = 'none';            
        
        document.getElementById('note_15_txt').style.display = 'none';
    }
    else if (Implantat_15 !== 1) {
        Tooth_15 = 1;
        document.getElementById('tooth_line_15_b').style.display = 'none';
        document.getElementById('tooth_line_15_p').style.display = 'none';

        document.getElementById('mobility_15_txt').style.display = 'block';

        document.getElementById('implantat_15_btn').style.display = 'block';

        document.getElementById('mg_15_db_txt').style.display = 'block';
        document.getElementById('mg_15_b_txt').style.display = 'block';
        document.getElementById('mg_15_mb_txt').style.display = 'block';
        
        document.getElementById('st_15_db_txt').style.display = 'block';
        document.getElementById('st_15_b_txt').style.display = 'block';
        document.getElementById('st_15_mb_txt').style.display = 'block';
        
        document.getElementById('mg_15_dp_txt').style.display = 'block';
        document.getElementById('mg_15_p_txt').style.display = 'block';
        document.getElementById('mg_15_mp_txt').style.display = 'block';
        
        document.getElementById('st_15_dp_txt').style.display = 'block';
        document.getElementById('st_15_p_txt').style.display = 'block';
        document.getElementById('st_15_mp_txt').style.display = 'block';
        
        document.getElementById('note_15_txt').style.display = 'block';

        document.getElementById('polygon_15_b').style.display = 'block';
        document.getElementById('polyline_an_15_b').style.display = 'block';
        document.getElementById('polyline_mg_15_b').style.display = 'block';
        
        document.getElementById('polygon_15_p').style.display = 'block';
        document.getElementById('polyline_an_15_p').style.display = 'block';
        document.getElementById('polyline_mg_15_p').style.display = 'block';

        if (Tooth_16 == 1 && Tooth_15 == 1) {
            document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_p').style.display = 'block';            
        }
        
        if (Tooth_15 == 1 && Zahn_14 == 1) {
            document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_p').style.display = 'block';            
        }
        
        document.getElementById('BOP_15_db_btn').style.display = 'block';
        document.getElementById('BOP_15_b_btn').style.display = 'block';
        document.getElementById('BOP_15_mb_btn').style.display = 'block';

        document.getElementById('BOP_15_dp_btn').style.display = 'block';
        document.getElementById('BOP_15_p_btn').style.display = 'block';
        document.getElementById('BOP_15_mp_btn').style.display = 'block';
        
        if (BOP_15_db == 1) {
            document.getElementById('BOP_15_db_rectangle').style.display = 'block';
        }
        if (BOP_15_b == 1) {
            document.getElementById('BOP_15_b_rectangle').style.display = 'block';
        }
        if (BOP_15_mb == 1) {
            document.getElementById('BOP_15_mb_rectangle').style.display = 'block';
        }
        if (BOP_15_dp == 1) {
            document.getElementById('BOP_15_dp_rectangle').style.display = 'block';
        }
        if (BOP_15_p == 1) {
            document.getElementById('BOP_15_p_rectangle').style.display = 'block';
        }
        if (BOP_15_mp == 1) {
            document.getElementById('BOP_15_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_15_db_btn').style.display = 'block';
        document.getElementById('PI_15_b_btn').style.display = 'block';
        document.getElementById('PI_15_mb_btn').style.display = 'block';

        document.getElementById('PI_15_dp_btn').style.display = 'block';
        document.getElementById('PI_15_p_btn').style.display = 'block';
        document.getElementById('PI_15_mp_btn').style.display = 'block';
        
        if (PI_15_db == 1) {
            document.getElementById('PI_15_db_rectangle').style.display = 'block';
        }
        if (PI_15_b == 1) {
            document.getElementById('PI_15_b_rectangle').style.display = 'block';
        }
        if (PI_15_mb == 1) {
            document.getElementById('PI_15_mb_rectangle').style.display = 'block';
        }
        if (PI_15_dp == 1) {
            document.getElementById('PI_15_dp_rectangle').style.display = 'block';
        }
        if (PI_15_p == 1) {
            document.getElementById('PI_15_p_rectangle').style.display = 'block';
        }
        if (PI_15_mp == 1) {
            document.getElementById('PI_15_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_15 == 1) {
        Tooth_15 = 1;
        document.getElementById('tooth_line_15_b').style.display = 'none';
        document.getElementById('tooth_line_15_p').style.display = 'none';

        document.getElementById('mobility_15_txt').style.display = 'block';
        
        document.getElementById('note_15_txt').style.display = 'block';

        document.getElementById('implantat_15_btn').style.display = 'block';
        document.getElementById('implantat_15_tab').style.display = 'block';
        document.getElementById('implantat_15_b_image').style.display = 'block';
        document.getElementById('implantat_15_p_image').style.display = 'block';

        document.getElementById('mg_15_db_txt').style.display = 'block';
        document.getElementById('mg_15_b_txt').style.display = 'block';
        document.getElementById('mg_15_mb_txt').style.display = 'block';
        
        document.getElementById('st_15_db_txt').style.display = 'block';
        document.getElementById('st_15_b_txt').style.display = 'block';
        document.getElementById('st_15_mb_txt').style.display = 'block';
        
        document.getElementById('mg_15_dp_txt').style.display = 'block';
        document.getElementById('mg_15_p_txt').style.display = 'block';
        document.getElementById('mg_15_mp_txt').style.display = 'block';
        
        document.getElementById('st_15_dp_txt').style.display = 'block';
        document.getElementById('st_15_p_txt').style.display = 'block';
        document.getElementById('st_15_mp_txt').style.display = 'block';

        document.getElementById('polygon_15_b').style.display = 'block';
        document.getElementById('polyline_an_15_b').style.display = 'block';
        document.getElementById('polyline_mg_15_b').style.display = 'block';
        
        document.getElementById('polygon_15_p').style.display = 'block';
        document.getElementById('polyline_an_15_p').style.display = 'block';
        document.getElementById('polyline_mg_15_p').style.display = 'block';

        if (Tooth_16 == 1 && Tooth_15 == 1) {
            document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_p').style.display = 'block';            
        }
        
        if (Tooth_15 == 1 && Zahn_14 == 1) {
            document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_p').style.display = 'block';            
        }

        document.getElementById('BOP_15_db_btn').style.display = 'block';
        document.getElementById('BOP_15_b_btn').style.display = 'block';
        document.getElementById('BOP_15_mb_btn').style.display = 'block';

        document.getElementById('BOP_15_dp_btn').style.display = 'block';
        document.getElementById('BOP_15_p_btn').style.display = 'block';
        document.getElementById('BOP_15_mp_btn').style.display = 'block';
        
        document.getElementById('PI_15_db_btn').style.display = 'block';
        document.getElementById('PI_15_b_btn').style.display = 'block';
        document.getElementById('PI_15_mb_btn').style.display = 'block';

        document.getElementById('PI_15_dp_btn').style.display = 'block';
        document.getElementById('PI_15_p_btn').style.display = 'block';
        document.getElementById('PI_15_mp_btn').style.display = 'block';
        
        if (BOP_15_db == 1) {
            document.getElementById('BOP_15_db_rectangle').style.display = 'block';
        }
        if (BOP_15_b == 1) {
            document.getElementById('BOP_15_b_rectangle').style.display = 'block';
        }
        if (BOP_15_mb == 1) {
            document.getElementById('BOP_15_mb_rectangle').style.display = 'block';
        }
        if (BOP_15_dp == 1) {
            document.getElementById('BOP_15_dp_rectangle').style.display = 'block';
        }
        if (BOP_15_p == 1) {
            document.getElementById('BOP_15_p_rectangle').style.display = 'block';
        }
        if (BOP_15_mp == 1) {
            document.getElementById('BOP_15_mp_rectangle').style.display = 'block';
        }
        
        if (PI_15_db == 1) {
            document.getElementById('PI_15_db_rectangle').style.display = 'block';
        }
        if (PI_15_b == 1) {
            document.getElementById('PI_15_b_rectangle').style.display = 'block';
        }
        if (PI_15_mb == 1) {
            document.getElementById('PI_15_mb_rectangle').style.display = 'block';
        }
        if (PI_15_dp == 1) {
            document.getElementById('PI_15_dp_rectangle').style.display = 'block';
        }
        if (PI_15_p == 1) {
            document.getElementById('PI_15_p_rectangle').style.display = 'block';
        }
        if (PI_15_mp == 1) {
            document.getElementById('PI_15_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_15() {
    if (Implantat_15 == 0) {
        Implantat_15 = 1;
        
        document.getElementById('implantat_15_b_image').style.display = 'block';
        document.getElementById('implantat_15_p_image').style.display = 'block';
        document.getElementById('implantat_15_tab').style.display = 'block';
    }
    else {
        Implantat_15 = 0;
        
        document.getElementById('implantat_15_b_image').style.display = 'none';
        document.getElementById('implantat_15_p_image').style.display = 'none';
        document.getElementById('implantat_15_tab').style.display = 'none';
    }
}

function toggle_BOP_15_db() {
    if (BOP_15_db == 0) {
        BOP_15_db = 1;
        document.getElementById('BOP_15_db_rectangle').style.display = 'block';
    }
    else {
        BOP_15_db = 0;
        document.getElementById('BOP_15_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_15_b() {
    if (BOP_15_b == 0) {
        BOP_15_b = 1;
        document.getElementById('BOP_15_b_rectangle').style.display = 'block';
    }
    else {
        BOP_15_b = 0;
        document.getElementById('BOP_15_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_15_mb() {
    if (BOP_15_mb == 0) {
        BOP_15_mb = 1;
        document.getElementById('BOP_15_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_15_mb = 0;
        document.getElementById('BOP_15_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_15_db() {
    if (PI_15_db == 0) {
        PI_15_db = 1;
        document.getElementById('PI_15_db_rectangle').style.display = 'block';
    }
    else {
        PI_15_db = 0;
        document.getElementById('PI_15_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_15_b() {
    if (PI_15_b == 0) {
        PI_15_b = 1;
        document.getElementById('PI_15_b_rectangle').style.display = 'block';
    }
    else {
        PI_15_b = 0;
        document.getElementById('PI_15_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_15_mb() {
    if (PI_15_mb == 0) {
        PI_15_mb = 1;
        document.getElementById('PI_15_mb_rectangle').style.display = 'block';
    }
    else {
        PI_15_mb = 0;
        document.getElementById('PI_15_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_15_dp() {
    if (BOP_15_dp == 0) {
        BOP_15_dp = 1;
        document.getElementById('BOP_15_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_15_dp = 0;
        document.getElementById('BOP_15_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_15_p() {
    if (BOP_15_p == 0) {
        BOP_15_p = 1;
        document.getElementById('BOP_15_p_rectangle').style.display = 'block';
    }
    else {
        BOP_15_p = 0;
        document.getElementById('BOP_15_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_15_mp() {
    if (BOP_15_mp == 0) {
        BOP_15_mp = 1;
        document.getElementById('BOP_15_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_15_mp = 0;
        document.getElementById('BOP_15_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_15_dp() {
    if (PI_15_dp == 0) {
        PI_15_dp = 1;
        document.getElementById('PI_15_dp_rectangle').style.display = 'block';
    }
    else {
        PI_15_dp = 0;
        document.getElementById('PI_15_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_15_p() {
    if (PI_15_p == 0) {
        PI_15_p = 1;
        document.getElementById('PI_15_p_rectangle').style.display = 'block';
    }
    else {
        PI_15_p = 0;
        document.getElementById('PI_15_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_15_mp() {
    if (PI_15_mp == 0) {
        PI_15_mp = 1;
        document.getElementById('PI_15_mp_rectangle').style.display = 'block';
    }
    else {
        PI_15_mp = 0;
        document.getElementById('PI_15_mp_rectangle').style.display = 'none';
    }
}

function change_probing_15() {
    if (Tooth_15 == 1) {
        
    // Variablen aus dem Formular
        st_15_db = document.forms[0]["st_15_db"].value;
        st_15_b = document.forms[0]["st_15_b"].value;
        st_15_mb = document.forms[0]["st_15_mb"].value;

        if (document.forms[0]["st_15_dp"].value > 3) {document.forms[0]["st_15_dp"].style.color = 'red';} else {document.forms[0]["st_15_dp"].style.color = 'black'}
        if (document.forms[0]["st_15_p"].value > 3) {document.forms[0]["st_15_p"].style.color = 'red';} else {document.forms[0]["st_15_p"].style.color = 'black'}
        if (document.forms[0]["st_15_mp"].value > 3) {document.forms[0]["st_15_mp"].style.color = 'red';} else {document.forms[0]["st_15_mp"].style.color = 'black'}
        
        mg_15_db = document.forms[0]["mg_15_db"].value;
        mg_15_b = document.forms[0]["mg_15_b"].value;
        mg_15_mb = document.forms[0]["mg_15_mb"].value;
        
        st_15_dp = document.forms[0]["st_15_dp"].value;
        st_15_p = document.forms[0]["st_15_p"].value;
        st_15_mp = document.forms[0]["st_15_mp"].value;

        if (document.forms[0]["st_15_db"].value > 3) {document.forms[0]["st_15_db"].style.color = 'red';} else {document.forms[0]["st_15_db"].style.color = 'black'}
        if (document.forms[0]["st_15_b"].value > 3) {document.forms[0]["st_15_b"].style.color = 'red';} else {document.forms[0]["st_15_b"].style.color = 'black'}
        if (document.forms[0]["st_15_mb"].value > 3) {document.forms[0]["st_15_mb"].style.color = 'red';} else {document.forms[0]["st_15_mb"].style.color = 'black'}
        
        mg_15_dp = document.forms[0]["mg_15_dp"].value;
        mg_15_p = document.forms[0]["mg_15_p"].value;
        mg_15_mp = document.forms[0]["mg_15_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
        var x_db_15 = 463;							// distal 15
        var x_mb_15 = 489;							// mesial 15
        var x_b_15 = (x_db_15 + x_mb_15)/2;			// bukkal 15
        
    // Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
        var x_dp_15 = 461;							// distal 15
        var x_mp_15 = 487;							// mesial 15
        var x_p_15 = (x_dp_15 + x_mp_15)/2;			// palatinal 15
        
    // Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
        var y_mg_15_db = mg_OK_b + 6.5 * mg_15_db;	// Margo Gingivae distobukkal 15
        var y_mg_15_b = mg_OK_b + 6.5 * mg_15_b;	// Margo Gingivae bukkal 15
        var y_mg_15_mb = mg_OK_b + 6.5 * mg_15_mb;	// Margo Gingivae mesiobukkal 15
        var y_st_15_db = 6.5 * st_15_db;			// Sondierungstiefe distobukkal 15
        var y_st_15_b = 6.5 * st_15_b;				// Sondierungstiefe bukkal 15
        var y_st_15_mb = 6.5 * st_15_mb;			// Sondierungstiefe mesiobukkal 15
        
    // Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
        var y_mg_15_dp = mg_OK_p - 6.5 * mg_15_dp;	// Margo Gingivae distopalatinal 15
        var y_mg_15_p = mg_OK_p - 6.5 * mg_15_p;	// Margo Gingivae palatinal 15
        var y_mg_15_mp = mg_OK_p - 6.5 * mg_15_mp;	// Margo Gingivae mesiopalatinal 15
        var y_st_15_dp = 6.5 * st_15_dp;			// Sondierungstiefe distopalatinal 15
        var y_st_15_p = 6.5 * st_15_p;				// Sondierungstiefe palatinal 15
        var y_st_15_mp = 6.5 * st_15_mp;			// Sondierungstiefe mesiopalatinal 15
        
    // Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_15_db = y_mg_15_db - y_st_15_db;	// Attachmentniveau distobukkal 15
        var y_an_15_b = y_mg_15_b - y_st_15_b;		// Attachmentniveau bukkal 15
        var y_an_15_mb = y_mg_15_mb - y_st_15_mb;	// Attachmentniveau mesiobukkal 15
        
    // Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_15_dp = y_mg_15_dp + y_st_15_dp;	// Attachmentniveau distopalatinal 15
        var y_an_15_p = y_mg_15_p + y_st_15_p;		// Attachmentniveau palatinal 15
        var y_an_15_mp = y_mg_15_mp + y_st_15_mp;	// Attachmentniveau mesiopalatinal 15
        
    // Parodontaltasche 15 bukkal zeichnen
        var string = 
            x_db_15 + ", " + y_an_15_db + "  " + 
            x_b_15 + ", " + y_an_15_b + "  " + 
            x_mb_15 + ", " + y_an_15_mb + "  " + 
            x_mb_15 + ", " + y_mg_15_mb + "  " + 
            x_b_15 + ", " + y_mg_15_b + "  " + 
            x_db_15 + ", " + y_mg_15_db;
        document.getElementById("polygon_15_b").setAttribute("points", string);
    // Attachmentniveau 15 bukkal zeichnen
        var string = 
            x_db_15 + ", " + y_an_15_db + "  " + 
            x_b_15 + ", " + y_an_15_b + "  " + 
            x_mb_15 + ", " + y_an_15_mb;
        document.getElementById("polyline_an_15_b").setAttribute("points", string);
    // Margo Gingivae 15 bukkal zeichnen
        var string =
            x_db_15 + ", " + y_mg_15_db + "  " + 
            x_b_15 + ", " + y_mg_15_b + "  " + 
            x_mb_15 + ", " + y_mg_15_mb;
        document.getElementById("polyline_mg_15_b").setAttribute("points", string);

    // Parodontaltasche 15 palatinal zeichnen
        var string = 
            x_dp_15 + ", " + y_an_15_dp + "  " + 
            x_p_15 + ", " + y_an_15_p + "  " + 
            x_mp_15 + ", " + y_an_15_mp + "  " + 
            x_mp_15 + ", " + y_mg_15_mp + "  " + 
            x_p_15 + ", " + y_mg_15_p + "  " + 
            x_dp_15 + ", " + y_mg_15_dp;
        document.getElementById("polygon_15_p").setAttribute("points", string);
    // Attachmentniveau 15 palatinal zeichnen
        var string = 
            x_dp_15 + ", " + y_an_15_dp + "  " + 
            x_p_15 + ", " + y_an_15_p + "  " + 
            x_mp_15 + ", " + y_an_15_mp;
        document.getElementById("polyline_an_15_p").setAttribute("points", string);
    // Margo Gingivae 15 palatinal zeichnen
        var string =
            x_dp_15 + ", " + y_mg_15_dp + "  " + 
            x_p_15 + ", " + y_mg_15_p + "  " + 
            x_mp_15 + ", " + y_mg_15_mp;
        document.getElementById("polyline_mg_15_p").setAttribute("points", string);
    }
    if (Tooth_15 == 1 && Zahn_14 == 1) {

        st_14_db = document.forms[0]["st_14_db"].value;
        mg_14_db = document.forms[0]["mg_14_db"].value;
        
        st_14_dp = document.forms[0]["st_14_dp"].value;
        mg_14_dp = document.forms[0]["mg_14_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
        var x_db_14 = 504;							// distal 14
        
    // Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
        var x_dp_14 = 504;							// distal 14
        
    // Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
        var y_mg_14_db = mg_OK_b + 6.5 * mg_14_db;	// Margo Gingivae distobukkal 14
        var y_st_14_db = 6.5 * st_14_db;			// Sondierungstiefe distobukkal 14
        
    // Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
        var y_mg_14_dp = mg_OK_p - 6.5 * mg_14_dp;	// Margo Gingivae distopalatinal 14
        var y_st_14_dp = 6.5 * st_14_dp;			// Sondierungstiefe distopalatinal 14
        
    // Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_14_db = y_mg_14_db - y_st_14_db;	// Attachmentniveau distobukkal 14
        
    // Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_14_dp = y_mg_14_dp + y_st_14_dp;	// Attachmentniveau distopalatinal 14

    // Parodontaltasche inter_15_14 bukkal zeichnen
        var string = 
            x_mb_15 + ", " + y_an_15_mb + "  " + 
            x_db_14 + ", " + y_an_14_db + "  " + 
            x_db_14 + ", " + y_mg_14_db + "  " + 
            x_mb_15 + ", " + y_mg_15_mb;
        document.getElementById("polygon_inter_15_14_b").setAttribute("points", string);
    // Attachmentniveau inter_15_14 bukkal zeichnen
        var string = 
            x_mb_15 + ", " + y_an_15_mb + "  " + 
            x_db_14 + ", " + y_an_14_db;
        document.getElementById("polyline_an_inter_15_14_b").setAttribute("points", string);
    // Margo Gingivae inter_15_14 bukkal zeichnen
        var string =
            x_mb_15 + ", " + y_mg_15_mb + "  " + 
            x_db_14 + ", " + y_mg_14_db;
        document.getElementById("polyline_mg_inter_15_14_b").setAttribute("points", string);

    // Parodontaltasche inter_15_14 palatinal zeichnen
        var string = 
            x_mp_15 + ", " + y_an_15_mp + "  " + 
            x_dp_14 + ", " + y_an_14_dp + "  " + 
            x_dp_14 + ", " + y_mg_14_dp + "  " + 
            x_mp_15 + ", " + y_mg_15_mp;
        document.getElementById("polygon_inter_15_14_p").setAttribute("points", string);
    // Attachmentniveau inter_15_14 palatinal zeichnen
        var string = 
            x_mp_15 + ", " + y_an_15_mp + "  " + 
            x_dp_14 + ", " + y_an_14_dp;
        document.getElementById("polyline_an_inter_15_14_p").setAttribute("points", string);
    // Margo Gingivae inter_15_14 palatinal zeichnen
        var string =
            x_mp_15 + ", " + y_mg_15_mp + "  " + 
            x_dp_14 + ", " + y_mg_14_dp;
        document.getElementById("polyline_mg_inter_15_14_p").setAttribute("points", string);
    }
    if (Tooth_16 == 1 && Tooth_15 == 1) {

        st_16_mb = document.forms[0]["st_16_mb"].value;
        mg_16_mb = document.forms[0]["mg_16_mb"].value;
        
        st_16_mp = document.forms[0]["st_16_mp"].value;
        mg_16_mp = document.forms[0]["mg_16_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
        var x_mb_16 = 451;							// mesial 16
        
    // Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
        var x_mp_16 = 445;							// mesial 16
        
    // Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
        var y_mg_16_mb = mg_OK_b + 6.5 * mg_16_mb;	// Margo Gingivae mesiobukkal 16
        var y_st_16_mb = 6.5 * st_16_mb;			// Sondierungstiefe mesiobukkal 16
        
    // Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
        var y_mg_16_mp = mg_OK_p - 6.5 * mg_16_mp;	// Margo Gingivae mesiopalatinal 16
        var y_st_16_mp = 6.5 * st_16_mp;			// Sondierungstiefe mesiopalatinal 16
        
    // Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_16_mb = y_mg_16_mb - y_st_16_mb;	// Attachmentniveau mesiobukkal 16
        
    // Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_16_mp = y_mg_16_mp + y_st_16_mp;	// Attachmentniveau mesiopalatinal 16

    // Parodontaltasche inter_16_15 bukkal zeichnen
        var string = 
            x_mb_16 + ", " + y_an_16_mb + "  " + 
            x_db_15 + ", " + y_an_15_db + "  " + 
            x_db_15 + ", " + y_mg_15_db + "  " + 
            x_mb_16 + ", " + y_mg_16_mb;
        document.getElementById("polygon_inter_16_15_b").setAttribute("points", string);
    // Attachmentniveau inter_16_15 bukkal zeichnen
        var string = 
            x_mb_16 + ", " + y_an_16_mb + "  " + 
            x_db_15 + ", " + y_an_15_db;
        document.getElementById("polyline_an_inter_16_15_b").setAttribute("points", string);
    // Margo Gingivae inter_16_15 bukkal zeichnen
        var string =
            x_mb_16 + ", " + y_mg_16_mb + "  " + 
            x_db_15 + ", " + y_mg_15_db;
        document.getElementById("polyline_mg_inter_16_15_b").setAttribute("points", string);

    // Parodontaltasche inter_16_15 palatinal zeichnen
        var string = 
            x_mp_16 + ", " + y_an_16_mp + "  " + 
            x_dp_15 + ", " + y_an_15_dp + "  " + 
            x_dp_15 + ", " + y_mg_15_dp + "  " + 
            x_mp_16 + ", " + y_mg_16_mp;
        document.getElementById("polygon_inter_16_15_p").setAttribute("points", string);
    // Attachmentniveau inter_16_15 palatinal zeichnen
        var string = 
            x_mp_16 + ", " + y_an_16_mp + "  " + 
            x_dp_15 + ", " + y_an_15_dp;
        document.getElementById("polyline_an_inter_16_15_p").setAttribute("points", string);
    // Margo Gingivae inter_16_15 palatinal zeichnen
        var string =
            x_mp_16 + ", " + y_mg_16_mp + "  " + 
            x_dp_15 + ", " + y_mg_15_dp;
        document.getElementById("polyline_mg_inter_16_15_p").setAttribute("points", string);
    }
}