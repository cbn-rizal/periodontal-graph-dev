	// Definition der Variablen fÃ¼r das Formular
    var Tooth_43 = 1;
    var Implantat_43 = 0;
    var BOP_43_db = 0;
    var BOP_43_b = 0;
    var BOP_43_mb = 0;
    var PI_43_db = 0;
    var PI_43_b = 0;
    var PI_43_mb = 0;
    var BOP_43_dl = 0;
    var BOP_43_l = 0;
    var BOP_43_ml = 0;
    var PI_43_dl = 0;
    var PI_43_l = 0;
    var PI_43_ml = 0;
    var mg_43_db = 0;
    var mg_43_b = 0;
    var mg_43_mb = 0;
    var st_43_db = 0;
    var st_43_b = 0;
    var st_43_mb = 0;
    var mg_43_dl = 0;
    var mg_43_l = 0;
    var mg_43_ml = 0;
    var st_43_dl = 0;
    var st_43_l = 0;
    var st_43_ml = 0;

function clear_data_43() {
    if (Tooth_43 == 1) {
        mg_43_db = 0;
        mg_43_b = 0;
        mg_43_mb = 0;
        st_43_db = 0;
        st_43_b = 0;
        st_43_mb = 0;

            document.getElementById('mg_43_db_txt').value = 0;
            document.getElementById('mg_43_b_txt').value = 0;
            document.getElementById('mg_43_mb_txt').value = 0;
            
            document.getElementById('st_43_db_txt').value = 0;
            document.getElementById('st_43_b_txt').value = 0;
            document.getElementById('st_43_mb_txt').value = 0;
        
            document.forms[0]["st_43_db"].style.color = 'black'
            document.forms[0]["st_43_b"].style.color = 'black'
            document.forms[0]["st_43_mb"].style.color = 'black'
        
        mg_43_dl = 0;
        mg_43_l = 0;
        mg_43_ml = 0;
        st_43_dl = 0;
        st_43_l = 0;
        st_43_ml = 0;

            document.getElementById('mg_43_dl_txt').value = 0;
            document.getElementById('mg_43_l_txt').value = 0;
            document.getElementById('mg_43_ml_txt').value = 0;
            
            document.getElementById('st_43_dl_txt').value = 0;
            document.getElementById('st_43_l_txt').value = 0;
            document.getElementById('st_43_ml_txt').value = 0;

            document.forms[0]["st_43_dl"].style.color = 'black'
            document.forms[0]["st_43_l"].style.color = 'black'
            document.forms[0]["st_43_ml"].style.color = 'black'
        
        change_probing_43();
        
        mobility_43 = 0;

            document.getElementById('mobility_43_txt').value = "0";

        note_43 = "";

            document.getElementById('note_43_txt').value = "";

        BOP_43_db = 0;
        BOP_43_b = 0;
        BOP_43_mb = 0;
                
        BOP_43_dl = 0;
        BOP_43_l = 0;
        BOP_43_ml = 0;
                
            document.getElementById('BOP_43_db_rectangle').style.display = 'none';
            document.getElementById('BOP_43_b_rectangle').style.display = 'none';
            document.getElementById('BOP_43_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_43_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_43_l_rectangle').style.display = 'none';
            document.getElementById('BOP_43_ml_rectangle').style.display = 'none';
            
        PI_43_db = 0;
        PI_43_b = 0;
        PI_43_mb = 0;
                
        PI_43_dl = 0;
        PI_43_l = 0;
        PI_43_ml = 0;

            document.getElementById('PI_43_db_rectangle').style.display = 'none';
            document.getElementById('PI_43_b_rectangle').style.display = 'none';
            document.getElementById('PI_43_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_43_dl_rectangle').style.display = 'none';
            document.getElementById('PI_43_l_rectangle').style.display = 'none';
            document.getElementById('PI_43_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_43() {
    if (Tooth_43 === 1) {
        Tooth_43 = 0;
        document.getElementById('tooth_line_43_b').style.display = 'block';
        document.getElementById('tooth_line_43_l').style.display = 'block';
        
        document.getElementById('mobility_43_txt').style.display = 'none';
        
        document.getElementById('implantat_43_btn').style.display = 'none';
        document.getElementById('implantat_43_tab').style.display = 'none';
        document.getElementById('implantat_43_b_image').style.display = 'none';
        document.getElementById('implantat_43_l_image').style.display = 'none';
        
        document.getElementById('mg_43_db_txt').style.display = 'none';
        document.getElementById('mg_43_b_txt').style.display = 'none';
        document.getElementById('mg_43_mb_txt').style.display = 'none';
        
        document.getElementById('st_43_db_txt').style.display = 'none';
        document.getElementById('st_43_b_txt').style.display = 'none';
        document.getElementById('st_43_mb_txt').style.display = 'none';
        
        document.getElementById('mg_43_dl_txt').style.display = 'none';
        document.getElementById('mg_43_l_txt').style.display = 'none';
        document.getElementById('mg_43_ml_txt').style.display = 'none';
        
        document.getElementById('st_43_dl_txt').style.display = 'none';
        document.getElementById('st_43_l_txt').style.display = 'none';
        document.getElementById('st_43_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_43_db_rectangle').style.display = 'none';
        document.getElementById('BOP_43_b_rectangle').style.display = 'none';
        document.getElementById('BOP_43_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_43_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_43_l_rectangle').style.display = 'none';
        document.getElementById('BOP_43_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_43_db_btn').style.display = 'none';
        document.getElementById('BOP_43_b_btn').style.display = 'none';
        document.getElementById('BOP_43_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_43_dl_btn').style.display = 'none';
        document.getElementById('BOP_43_l_btn').style.display = 'none';
        document.getElementById('BOP_43_ml_btn').style.display = 'none';
        
        document.getElementById('PI_43_db_rectangle').style.display = 'none';
        document.getElementById('PI_43_b_rectangle').style.display = 'none';
        document.getElementById('PI_43_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_43_dl_rectangle').style.display = 'none';
        document.getElementById('PI_43_l_rectangle').style.display = 'none';
        document.getElementById('PI_43_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_43_db_btn').style.display = 'none';
        document.getElementById('PI_43_b_btn').style.display = 'none';
        document.getElementById('PI_43_mb_btn').style.display = 'none';
        
        document.getElementById('PI_43_dl_btn').style.display = 'none';
        document.getElementById('PI_43_l_btn').style.display = 'none';
        document.getElementById('PI_43_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_43_b').style.display = 'none';
        document.getElementById('polyline_an_43_b').style.display = 'none';
        document.getElementById('polyline_mg_43_b').style.display = 'none';
        
        document.getElementById('polygon_43_l').style.display = 'none';
        document.getElementById('polyline_an_43_l').style.display = 'none';
        document.getElementById('polyline_mg_43_l').style.display = 'none';
        
        document.getElementById('polygon_inter_44_43_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_44_43_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_44_43_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_44_43_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_44_43_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_44_43_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_43_42_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_43_42_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_43_42_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_43_42_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_43_42_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_43_42_l').style.display = 'none';            
        
        document.getElementById('note_43_txt').style.display = 'none';
    }
    else if (Implantat_43 !== 1) {
        Tooth_43 = 1;
        document.getElementById('tooth_line_43_b').style.display = 'none';
        document.getElementById('tooth_line_43_l').style.display = 'none';

        document.getElementById('mobility_43_txt').style.display = 'block';

        document.getElementById('implantat_43_btn').style.display = 'block';

        document.getElementById('mg_43_db_txt').style.display = 'block';
        document.getElementById('mg_43_b_txt').style.display = 'block';
        document.getElementById('mg_43_mb_txt').style.display = 'block';
        
        document.getElementById('st_43_db_txt').style.display = 'block';
        document.getElementById('st_43_b_txt').style.display = 'block';
        document.getElementById('st_43_mb_txt').style.display = 'block';
        
        document.getElementById('mg_43_dl_txt').style.display = 'block';
        document.getElementById('mg_43_l_txt').style.display = 'block';
        document.getElementById('mg_43_ml_txt').style.display = 'block';
        
        document.getElementById('st_43_dl_txt').style.display = 'block';
        document.getElementById('st_43_l_txt').style.display = 'block';
        document.getElementById('st_43_ml_txt').style.display = 'block';
        
        document.getElementById('note_43_txt').style.display = 'block';

        document.getElementById('polygon_43_b').style.display = 'block';
        document.getElementById('polyline_an_43_b').style.display = 'block';
        document.getElementById('polyline_mg_43_b').style.display = 'block';
        
        document.getElementById('polygon_43_l').style.display = 'block';
        document.getElementById('polyline_an_43_l').style.display = 'block';
        document.getElementById('polyline_mg_43_l').style.display = 'block';

        if (Tooth_44 == 1 && Tooth_43 == 1) {
            document.getElementById('polygon_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_l').style.display = 'block';            
        }
        
        if (Tooth_43 == 1 && Tooth_42 == 1) {
            document.getElementById('polygon_inter_43_42_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_43_42_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_43_42_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_43_42_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_43_42_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_43_42_l').style.display = 'block';            
        }

        document.getElementById('BOP_43_db_btn').style.display = 'block';
        document.getElementById('BOP_43_b_btn').style.display = 'block';
        document.getElementById('BOP_43_mb_btn').style.display = 'block';

        document.getElementById('BOP_43_dl_btn').style.display = 'block';
        document.getElementById('BOP_43_l_btn').style.display = 'block';
        document.getElementById('BOP_43_ml_btn').style.display = 'block';
        
        if (BOP_43_db == 1) {
            document.getElementById('BOP_43_db_rectangle').style.display = 'block';
        }
        if (BOP_43_b == 1) {
            document.getElementById('BOP_43_b_rectangle').style.display = 'block';
        }
        if (BOP_43_mb == 1) {
            document.getElementById('BOP_43_mb_rectangle').style.display = 'block';
        }
        if (BOP_43_dl == 1) {
            document.getElementById('BOP_43_dl_rectangle').style.display = 'block';
        }
        if (BOP_43_l == 1) {
            document.getElementById('BOP_43_l_rectangle').style.display = 'block';
        }
        if (BOP_43_ml == 1) {
            document.getElementById('BOP_43_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_43_db_btn').style.display = 'block';
        document.getElementById('PI_43_b_btn').style.display = 'block';
        document.getElementById('PI_43_mb_btn').style.display = 'block';

        document.getElementById('PI_43_dl_btn').style.display = 'block';
        document.getElementById('PI_43_l_btn').style.display = 'block';
        document.getElementById('PI_43_ml_btn').style.display = 'block';
        
        if (PI_43_db == 1) {
            document.getElementById('PI_43_db_rectangle').style.display = 'block';
        }
        if (PI_43_b == 1) {
            document.getElementById('PI_43_b_rectangle').style.display = 'block';
        }
        if (PI_43_mb == 1) {
            document.getElementById('PI_43_mb_rectangle').style.display = 'block';
        }
        if (PI_43_dl == 1) {
            document.getElementById('PI_43_dl_rectangle').style.display = 'block';
        }
        if (PI_43_l == 1) {
            document.getElementById('PI_43_l_rectangle').style.display = 'block';
        }
        if (PI_43_ml == 1) {
            document.getElementById('PI_43_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_43 == 1) {
        Tooth_43 = 1;
        document.getElementById('tooth_line_43_b').style.display = 'none';
        document.getElementById('tooth_line_43_l').style.display = 'none';

        document.getElementById('mobility_43_txt').style.display = 'block';
        
        document.getElementById('note_43_txt').style.display = 'block';

        document.getElementById('implantat_43_btn').style.display = 'block';
        document.getElementById('implantat_43_tab').style.display = 'block';
        document.getElementById('implantat_43_b_image').style.display = 'block';
        document.getElementById('implantat_43_l_image').style.display = 'block';

        document.getElementById('mg_43_db_txt').style.display = 'block';
        document.getElementById('mg_43_b_txt').style.display = 'block';
        document.getElementById('mg_43_mb_txt').style.display = 'block';
        
        document.getElementById('st_43_db_txt').style.display = 'block';
        document.getElementById('st_43_b_txt').style.display = 'block';
        document.getElementById('st_43_mb_txt').style.display = 'block';
        
        document.getElementById('mg_43_dl_txt').style.display = 'block';
        document.getElementById('mg_43_l_txt').style.display = 'block';
        document.getElementById('mg_43_ml_txt').style.display = 'block';
        
        document.getElementById('st_43_dl_txt').style.display = 'block';
        document.getElementById('st_43_l_txt').style.display = 'block';
        document.getElementById('st_43_ml_txt').style.display = 'block';

        document.getElementById('polygon_43_b').style.display = 'block';
        document.getElementById('polyline_an_43_b').style.display = 'block';
        document.getElementById('polyline_mg_43_b').style.display = 'block';
        
        document.getElementById('polygon_43_l').style.display = 'block';
        document.getElementById('polyline_an_43_l').style.display = 'block';
        document.getElementById('polyline_mg_43_l').style.display = 'block';

        if (Tooth_44 == 1 && Tooth_43 == 1) {
            document.getElementById('polygon_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_44_43_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_44_43_l').style.display = 'block';            
        }
        
        if (Tooth_43 == 1 && Tooth_42 == 1) {
            document.getElementById('polygon_inter_43_42_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_43_42_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_43_42_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_43_42_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_43_42_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_43_42_l').style.display = 'block';            
        }

        document.getElementById('BOP_43_db_btn').style.display = 'block';
        document.getElementById('BOP_43_b_btn').style.display = 'block';
        document.getElementById('BOP_43_mb_btn').style.display = 'block';

        document.getElementById('BOP_43_dl_btn').style.display = 'block';
        document.getElementById('BOP_43_l_btn').style.display = 'block';
        document.getElementById('BOP_43_ml_btn').style.display = 'block';
        
        document.getElementById('PI_43_db_btn').style.display = 'block';
        document.getElementById('PI_43_b_btn').style.display = 'block';
        document.getElementById('PI_43_mb_btn').style.display = 'block';

        document.getElementById('PI_43_dl_btn').style.display = 'block';
        document.getElementById('PI_43_l_btn').style.display = 'block';
        document.getElementById('PI_43_ml_btn').style.display = 'block';
        
        if (BOP_43_db == 1) {
            document.getElementById('BOP_43_db_rectangle').style.display = 'block';
        }
        if (BOP_43_b == 1) {
            document.getElementById('BOP_43_b_rectangle').style.display = 'block';
        }
        if (BOP_43_mb == 1) {
            document.getElementById('BOP_43_mb_rectangle').style.display = 'block';
        }
        if (BOP_43_dl == 1) {
            document.getElementById('BOP_43_dl_rectangle').style.display = 'block';
        }
        if (BOP_43_l == 1) {
            document.getElementById('BOP_43_l_rectangle').style.display = 'block';
        }
        if (BOP_43_ml == 1) {
            document.getElementById('BOP_43_ml_rectangle').style.display = 'block';
        }
        
        if (PI_43_db == 1) {
            document.getElementById('PI_43_db_rectangle').style.display = 'block';
        }
        if (PI_43_b == 1) {
            document.getElementById('PI_43_b_rectangle').style.display = 'block';
        }
        if (PI_43_mb == 1) {
            document.getElementById('PI_43_mb_rectangle').style.display = 'block';
        }
        if (PI_43_dl == 1) {
            document.getElementById('PI_43_dl_rectangle').style.display = 'block';
        }
        if (PI_43_l == 1) {
            document.getElementById('PI_43_l_rectangle').style.display = 'block';
        }
        if (PI_43_ml == 1) {
            document.getElementById('PI_43_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_43() {
    if (Implantat_43 == 0) {
        Implantat_43 = 1;
        
        document.getElementById('implantat_43_b_image').style.display = 'block';
        document.getElementById('implantat_43_l_image').style.display = 'block';
        document.getElementById('implantat_43_tab').style.display = 'block';
    }
    else {
        Implantat_43 = 0;
        
        document.getElementById('implantat_43_b_image').style.display = 'none';
        document.getElementById('implantat_43_l_image').style.display = 'none';
        document.getElementById('implantat_43_tab').style.display = 'none';
    }
}

function toggle_BOP_43_db() {
    if (BOP_43_db == 0) {
        BOP_43_db = 1;
        document.getElementById('BOP_43_db_rectangle').style.display = 'block';
    }
    else {
        BOP_43_db = 0;
        document.getElementById('BOP_43_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_43_b() {
    if (BOP_43_b == 0) {
        BOP_43_b = 1;
        document.getElementById('BOP_43_b_rectangle').style.display = 'block';
    }
    else {
        BOP_43_b = 0;
        document.getElementById('BOP_43_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_43_mb() {
    if (BOP_43_mb == 0) {
        BOP_43_mb = 1;
        document.getElementById('BOP_43_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_43_mb = 0;
        document.getElementById('BOP_43_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_43_db() {
    if (PI_43_db == 0) {
        PI_43_db = 1;
        document.getElementById('PI_43_db_rectangle').style.display = 'block';
    }
    else {
        PI_43_db = 0;
        document.getElementById('PI_43_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_43_b() {
    if (PI_43_b == 0) {
        PI_43_b = 1;
        document.getElementById('PI_43_b_rectangle').style.display = 'block';
    }
    else {
        PI_43_b = 0;
        document.getElementById('PI_43_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_43_mb() {
    if (PI_43_mb == 0) {
        PI_43_mb = 1;
        document.getElementById('PI_43_mb_rectangle').style.display = 'block';
    }
    else {
        PI_43_mb = 0;
        document.getElementById('PI_43_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_43_dl() {
    if (BOP_43_dl == 0) {
        BOP_43_dl = 1;
        document.getElementById('BOP_43_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_43_dl = 0;
        document.getElementById('BOP_43_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_43_l() {
    if (BOP_43_l == 0) {
        BOP_43_l = 1;
        document.getElementById('BOP_43_l_rectangle').style.display = 'block';
    }
    else {
        BOP_43_l = 0;
        document.getElementById('BOP_43_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_43_ml() {
    if (BOP_43_ml == 0) {
        BOP_43_ml = 1;
        document.getElementById('BOP_43_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_43_ml = 0;
        document.getElementById('BOP_43_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_43_dl() {
    if (PI_43_dl == 0) {
        PI_43_dl = 1;
        document.getElementById('PI_43_dl_rectangle').style.display = 'block';
    }
    else {
        PI_43_dl = 0;
        document.getElementById('PI_43_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_43_l() {
    if (PI_43_l == 0) {
        PI_43_l = 1;
        document.getElementById('PI_43_l_rectangle').style.display = 'block';
    }
    else {
        PI_43_l = 0;
        document.getElementById('PI_43_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_43_ml() {
    if (PI_43_ml == 0) {
        PI_43_ml = 1;
        document.getElementById('PI_43_ml_rectangle').style.display = 'block';
    }
    else {
        PI_43_ml = 0;
        document.getElementById('PI_43_ml_rectangle').style.display = 'none';
    }
}

function change_probing_43() {
    if (Tooth_43 == 1) {
        
    // Variablen aus dem Formular
        st_43_db = document.forms[0]["st_43_db"].value;
        st_43_b = document.forms[0]["st_43_b"].value;
        st_43_mb = document.forms[0]["st_43_mb"].value;

        if (document.forms[0]["st_43_dl"].value > 3) {document.forms[0]["st_43_dl"].style.color = 'red';} else {document.forms[0]["st_43_dl"].style.color = 'black'};
        if (document.forms[0]["st_43_l"].value > 3) {document.forms[0]["st_43_l"].style.color = 'red';} else {document.forms[0]["st_43_l"].style.color = 'black'};
        if (document.forms[0]["st_43_ml"].value > 3) {document.forms[0]["st_43_ml"].style.color = 'red';} else {document.forms[0]["st_43_ml"].style.color = 'black'};
        
        mg_43_db = document.forms[0]["mg_43_db"].value;
        mg_43_b = document.forms[0]["mg_43_b"].value;
        mg_43_mb = document.forms[0]["mg_43_mb"].value;
        
        st_43_dl = document.forms[0]["st_43_dl"].value;
        st_43_l = document.forms[0]["st_43_l"].value;
        st_43_ml = document.forms[0]["st_43_ml"].value;

        if (document.forms[0]["st_43_db"].value > 3) {document.forms[0]["st_43_db"].style.color = 'red';} else {document.forms[0]["st_43_db"].style.color = 'black'};
        if (document.forms[0]["st_43_b"].value > 3) {document.forms[0]["st_43_b"].style.color = 'red';} else {document.forms[0]["st_43_b"].style.color = 'black'};
        if (document.forms[0]["st_43_mb"].value > 3) {document.forms[0]["st_43_mb"].style.color = 'red';} else {document.forms[0]["st_43_mb"].style.color = 'black'};
        
        mg_43_dl = document.forms[0]["mg_43_dl"].value;
        mg_43_l = document.forms[0]["mg_43_l"].value;
        mg_43_ml = document.forms[0]["mg_43_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 43 (bukkal) in der Bitmap
        var x_db_43 = 570;							// distal 43
        var x_mb_43 = 592;							// mesial 43
        var x_b_43 = (x_db_43 + x_mb_43)/2;			// bukkal 43
        
    // Set der horizontalen Koordinaten von Zahn 43 (lingual) in der Bitmap
        var x_dl_43 = 570;							// distal 43
        var x_ml_43 = 590;							// mesial 43
        var x_l_43 = (x_dl_43 + x_ml_43)/2;			// lingual 43
        
    // Set der vertikalen Koordinaten von Zahn 43 (bukkal) aus dem Formular
        var y_mg_43_db = mg_UK_b - 6.05 * mg_43_db;	// Margo Gingivae distobukkal 43
        var y_mg_43_b = mg_UK_b - 6.05 * mg_43_b;	// Margo Gingivae bukkal 43
        var y_mg_43_mb = mg_UK_b - 6.05 * mg_43_mb;	// Margo Gingivae mesiobukkal 43
        var y_st_43_db = 6.05 * st_43_db;			// Sondierungstiefe distobukkal 43
        var y_st_43_b = 6.05 * st_43_b;				// Sondierungstiefe bukkal 43
        var y_st_43_mb = 6.05 * st_43_mb;			// Sondierungstiefe mesiobukkal 43
        
    // Set der vertikalen Koordinaten von Zahn 43 (lingual) aus dem Formular
        var y_mg_43_dl = mg_UK_l + 6.05 * mg_43_dl;	// Margo Gingivae distolingual 43
        var y_mg_43_l = mg_UK_l + 6.05 * mg_43_l;	// Margo Gingivae lingual 43
        var y_mg_43_ml = mg_UK_l + 6.05 * mg_43_ml;	// Margo Gingivae mesiolingual 43
        var y_st_43_dl = 6.05 * st_43_dl;			// Sondierungstiefe distolingual 43
        var y_st_43_l = 6.05 * st_43_l;				// Sondierungstiefe lingual 43
        var y_st_43_ml = 6.05 * st_43_ml;			// Sondierungstiefe mesiolingual 43
        
    // Berechnung des Attachmentniveaus 43 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_43_db = y_mg_43_db + y_st_43_db;	// Attachmentniveau distobukkal 43
        var y_an_43_b = y_mg_43_b + y_st_43_b;		// Attachmentniveau bukkal 43
        var y_an_43_mb = y_mg_43_mb + y_st_43_mb;	// Attachmentniveau mesiobukkal 43
        
    // Berechnung des Attachmentniveaus 43 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_43_dl = y_mg_43_dl - y_st_43_dl;	// Attachmentniveau distolingual 43
        var y_an_43_l = y_mg_43_l - y_st_43_l;		// Attachmentniveau lingual 43
        var y_an_43_ml = y_mg_43_ml - y_st_43_ml;	// Attachmentniveau mesiolingual 43
        
    // Parodontaltasche 43 bukkal zeichnen
        var string = 
            x_db_43 + ", " + y_an_43_db + "  " + 
            x_b_43 + ", " + y_an_43_b + "  " + 
            x_mb_43 + ", " + y_an_43_mb + "  " + 
            x_mb_43 + ", " + y_mg_43_mb + "  " + 
            x_b_43 + ", " + y_mg_43_b + "  " + 
            x_db_43 + ", " + y_mg_43_db;
        document.getElementById("polygon_43_b").setAttribute("points", string);
    // Attachmentniveau 43 bukkal zeichnen
        var string = 
            x_db_43 + ", " + y_an_43_db + "  " + 
            x_b_43 + ", " + y_an_43_b + "  " + 
            x_mb_43 + ", " + y_an_43_mb;
        document.getElementById("polyline_an_43_b").setAttribute("points", string);
    // Margo Gingivae 43 bukkal zeichnen
        var string =
            x_db_43 + ", " + y_mg_43_db + "  " + 
            x_b_43 + ", " + y_mg_43_b + "  " + 
            x_mb_43 + ", " + y_mg_43_mb;
        document.getElementById("polyline_mg_43_b").setAttribute("points", string);

    // Parodontaltasche 43 lingual zeichnen
        var string = 
            x_dl_43 + ", " + y_an_43_dl + "  " + 
            x_l_43 + ", " + y_an_43_l + "  " + 
            x_ml_43 + ", " + y_an_43_ml + "  " + 
            x_ml_43 + ", " + y_mg_43_ml + "  " + 
            x_l_43 + ", " + y_mg_43_l + "  " + 
            x_dl_43 + ", " + y_mg_43_dl;
        document.getElementById("polygon_43_l").setAttribute("points", string);
    // Attachmentniveau 43 lingual zeichnen
        var string = 
            x_dl_43 + ", " + y_an_43_dl + "  " + 
            x_l_43 + ", " + y_an_43_l + "  " + 
            x_ml_43 + ", " + y_an_43_ml;
        document.getElementById("polyline_an_43_l").setAttribute("points", string);
    // Margo Gingivae 43 lingual zeichnen
        var string =
            x_dl_43 + ", " + y_mg_43_dl + "  " + 
            x_l_43 + ", " + y_mg_43_l + "  " + 
            x_ml_43 + ", " + y_mg_43_ml;
        document.getElementById("polyline_mg_43_l").setAttribute("points", string);
    }
    if (Tooth_43 == 1 && Tooth_42 == 1) {

        st_42_db = document.forms[0]["st_42_db"].value;
        mg_42_db = document.forms[0]["mg_42_db"].value;
        
        st_42_dl = document.forms[0]["st_42_dl"].value;
        mg_42_dl = document.forms[0]["mg_42_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 42 (bukkal) in der Bitmap
        var x_db_42 = 610;							// distal 42
        
    // Set der horizontalen Koordinaten von Zahn 42 (lingual) in der Bitmap
        var x_dl_42 = 607;							// distal 42
        
    // Set der vertikalen Koordinaten von Zahn 42 (bukkal) aus dem Formular
        var y_mg_42_db = mg_UK_b - 6.05 * mg_42_db;	// Margo Gingivae distobukkal 42
        var y_st_42_db = 6.05 * st_42_db;			// Sondierungstiefe distobukkal 42
        
    // Set der vertikalen Koordinaten von Zahn 42 (lingual) aus dem Formular
        var y_mg_42_dl = mg_UK_l + 6.05 * mg_42_dl;	// Margo Gingivae distolingual 42
        var y_st_42_dl = 6.05 * st_42_dl;			// Sondierungstiefe distolingual 42
        
    // Berechnung des Attachmentniveaus 42 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_42_db = y_mg_42_db + y_st_42_db;	// Attachmentniveau distobukkal 42
        
    // Berechnung des Attachmentniveaus 42 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_42_dl = y_mg_42_dl - y_st_42_dl;	// Attachmentniveau distolingual 42

    // Parodontaltasche inter_43_42 bukkal zeichnen
        var string = 
            x_mb_43 + ", " + y_an_43_mb + "  " + 
            x_db_42 + ", " + y_an_42_db + "  " + 
            x_db_42 + ", " + y_mg_42_db + "  " + 
            x_mb_43 + ", " + y_mg_43_mb;
        document.getElementById("polygon_inter_43_42_b").setAttribute("points", string);
    // Attachmentniveau inter_43_42 bukkal zeichnen
        var string = 
            x_mb_43 + ", " + y_an_43_mb + "  " + 
            x_db_42 + ", " + y_an_42_db;
        document.getElementById("polyline_an_inter_43_42_b").setAttribute("points", string);
    // Margo Gingivae inter_43_42 bukkal zeichnen
        var string =
            x_mb_43 + ", " + y_mg_43_mb + "  " + 
            x_db_42 + ", " + y_mg_42_db;
        document.getElementById("polyline_mg_inter_43_42_b").setAttribute("points", string);

    // Parodontaltasche inter_43_42 lingual zeichnen
        var string = 
            x_ml_43 + ", " + y_an_43_ml + "  " + 
            x_dl_42 + ", " + y_an_42_dl + "  " + 
            x_dl_42 + ", " + y_mg_42_dl + "  " + 
            x_ml_43 + ", " + y_mg_43_ml;
        document.getElementById("polygon_inter_43_42_l").setAttribute("points", string);
    // Attachmentniveau inter_43_42 lingual zeichnen
        var string = 
            x_ml_43 + ", " + y_an_43_ml + "  " + 
            x_dl_42 + ", " + y_an_42_dl;
        document.getElementById("polyline_an_inter_43_42_l").setAttribute("points", string);
    // Margo Gingivae inter_43_42 lingual zeichnen
        var string =
            x_ml_43 + ", " + y_mg_43_ml + "  " + 
            x_dl_42 + ", " + y_mg_42_dl;
        document.getElementById("polyline_mg_inter_43_42_l").setAttribute("points", string);
    }
    if (Tooth_44 == 1 && Tooth_43 == 1) {

        st_44_mb = document.forms[0]["st_44_mb"].value;
        mg_44_mb = document.forms[0]["mg_44_mb"].value;
        
        st_44_ml = document.forms[0]["st_44_ml"].value;
        mg_44_ml = document.forms[0]["mg_44_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
        var x_mb_44 = 553;							// mesial 44
        
    // Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
        var x_ml_44 = 553;							// mesial 44
        
    // Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
        var y_mg_44_mb = mg_UK_b - 6.05 * mg_44_mb;	// Margo Gingivae mesiobukkal 44
        var y_st_44_mb = 6.05 * st_44_mb;			// Sondierungstiefe mesiobukkal 44
        
    // Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
        var y_mg_44_ml = mg_UK_l + 6.05 * mg_44_ml;	// Margo Gingivae mesiolingual 44
        var y_st_44_ml = 6.05 * st_44_ml;			// Sondierungstiefe mesiolingual 44
        
    // Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_44_mb = y_mg_44_mb + y_st_44_mb;	// Attachmentniveau mesiobukkal 44
        
    // Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_44_ml = y_mg_44_ml - y_st_44_ml;	// Attachmentniveau mesiolingual 44

    // Parodontaltasche inter_44_43 bukkal zeichnen
        var string = 
            x_mb_44 + ", " + y_an_44_mb + "  " + 
            x_db_43 + ", " + y_an_43_db + "  " + 
            x_db_43 + ", " + y_mg_43_db + "  " + 
            x_mb_44 + ", " + y_mg_44_mb;
        document.getElementById("polygon_inter_44_43_b").setAttribute("points", string);
    // Attachmentniveau inter_44_43 bukkal zeichnen
        var string = 
            x_mb_44 + ", " + y_an_44_mb + "  " + 
            x_db_43 + ", " + y_an_43_db;
        document.getElementById("polyline_an_inter_44_43_b").setAttribute("points", string);
    // Margo Gingivae inter_44_43 bukkal zeichnen
        var string =
            x_mb_44 + ", " + y_mg_44_mb + "  " + 
            x_db_43 + ", " + y_mg_43_db;
        document.getElementById("polyline_mg_inter_44_43_b").setAttribute("points", string);

    // Parodontaltasche inter_44_43 lingual zeichnen
        var string = 
            x_ml_44 + ", " + y_an_44_ml + "  " + 
            x_dl_43 + ", " + y_an_43_dl + "  " + 
            x_dl_43 + ", " + y_mg_43_dl + "  " + 
            x_ml_44 + ", " + y_mg_44_ml;
        document.getElementById("polygon_inter_44_43_l").setAttribute("points", string);
    // Attachmentniveau inter_44_43 lingual zeichnen
        var string = 
            x_ml_44 + ", " + y_an_44_ml + "  " + 
            x_dl_43 + ", " + y_an_43_dl;
        document.getElementById("polyline_an_inter_44_43_l").setAttribute("points", string);
    // Margo Gingivae inter_44_43 lingual zeichnen
        var string =
            x_ml_44 + ", " + y_mg_44_ml + "  " + 
            x_dl_43 + ", " + y_mg_43_dl;
        document.getElementById("polyline_mg_inter_44_43_l").setAttribute("points", string);
    }
}