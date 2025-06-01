	// Definition der Variablen fÃ¼r das Formular
    var Zahn_45 = 1;
    var Implantat_45 = 0;
    var BOP_45_db = 0;
    var BOP_45_b = 0;
    var BOP_45_mb = 0;
    var PI_45_db = 0;
    var PI_45_b = 0;
    var PI_45_mb = 0;
    var BOP_45_dl = 0;
    var BOP_45_l = 0;
    var BOP_45_ml = 0;
    var PI_45_dl = 0;
    var PI_45_l = 0;
    var PI_45_ml = 0;
    var mg_45_db = 0;
    var mg_45_b = 0;
    var mg_45_mb = 0;
    var st_45_db = 0;
    var st_45_b = 0;
    var st_45_mb = 0;
    var mg_45_dl = 0;
    var mg_45_l = 0;
    var mg_45_ml = 0;
    var st_45_dl = 0;
    var st_45_l = 0;
    var st_45_ml = 0;

function clear_data_45() {
    if (Zahn_45 == 1) {
        mg_45_db = 0;
        mg_45_b = 0;
        mg_45_mb = 0;
        st_45_db = 0;
        st_45_b = 0;
        st_45_mb = 0;

            document.getElementById('mg_45_db_txt').value = 0;
            document.getElementById('mg_45_b_txt').value = 0;
            document.getElementById('mg_45_mb_txt').value = 0;
            
            document.getElementById('st_45_db_txt').value = 0;
            document.getElementById('st_45_b_txt').value = 0;
            document.getElementById('st_45_mb_txt').value = 0;
        
            document.forms[0]["st_45_db"].style.color = 'black'
            document.forms[0]["st_45_b"].style.color = 'black'
            document.forms[0]["st_45_mb"].style.color = 'black'
        
        mg_45_dl = 0;
        mg_45_l = 0;
        mg_45_ml = 0;
        st_45_dl = 0;
        st_45_l = 0;
        st_45_ml = 0;

            document.getElementById('mg_45_dl_txt').value = 0;
            document.getElementById('mg_45_l_txt').value = 0;
            document.getElementById('mg_45_ml_txt').value = 0;
            
            document.getElementById('st_45_dl_txt').value = 0;
            document.getElementById('st_45_l_txt').value = 0;
            document.getElementById('st_45_ml_txt').value = 0;

            document.forms[0]["st_45_dl"].style.color = 'black'
            document.forms[0]["st_45_l"].style.color = 'black'
            document.forms[0]["st_45_ml"].style.color = 'black'
        
        change_probing_45();
        
        mobility_45 = 0;

            document.getElementById('mobility_45_txt').value = "0";

        note_45 = "";

            document.getElementById('note_45_txt').value = "";

        BOP_45_db = 0;
        BOP_45_b = 0;
        BOP_45_mb = 0;
                
        BOP_45_dl = 0;
        BOP_45_l = 0;
        BOP_45_ml = 0;
                
            document.getElementById('BOP_45_db_rectangle').style.display = 'none';
            document.getElementById('BOP_45_b_rectangle').style.display = 'none';
            document.getElementById('BOP_45_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_45_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_45_l_rectangle').style.display = 'none';
            document.getElementById('BOP_45_ml_rectangle').style.display = 'none';
            
        PI_45_db = 0;
        PI_45_b = 0;
        PI_45_mb = 0;
                
        PI_45_dl = 0;
        PI_45_l = 0;
        PI_45_ml = 0;

            document.getElementById('PI_45_db_rectangle').style.display = 'none';
            document.getElementById('PI_45_b_rectangle').style.display = 'none';
            document.getElementById('PI_45_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_45_dl_rectangle').style.display = 'none';
            document.getElementById('PI_45_l_rectangle').style.display = 'none';
            document.getElementById('PI_45_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_45() {
    if (Zahn_45 === 1) {
        Zahn_45 = 0;
        document.getElementById('tooth_line_45_b').style.display = 'block';
        document.getElementById('tooth_line_45_l').style.display = 'block';
        
        document.getElementById('mobility_45_txt').style.display = 'none';
        
        document.getElementById('implantat_45_btn').style.display = 'none';
        document.getElementById('implantat_45_tab').style.display = 'none';
        document.getElementById('implantat_45_b_image').style.display = 'none';
        document.getElementById('implantat_45_l_image').style.display = 'none';
        
        document.getElementById('mg_45_db_txt').style.display = 'none';
        document.getElementById('mg_45_b_txt').style.display = 'none';
        document.getElementById('mg_45_mb_txt').style.display = 'none';
        
        document.getElementById('st_45_db_txt').style.display = 'none';
        document.getElementById('st_45_b_txt').style.display = 'none';
        document.getElementById('st_45_mb_txt').style.display = 'none';
        
        document.getElementById('mg_45_dl_txt').style.display = 'none';
        document.getElementById('mg_45_l_txt').style.display = 'none';
        document.getElementById('mg_45_ml_txt').style.display = 'none';
        
        document.getElementById('st_45_dl_txt').style.display = 'none';
        document.getElementById('st_45_l_txt').style.display = 'none';
        document.getElementById('st_45_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_45_db_rectangle').style.display = 'none';
        document.getElementById('BOP_45_b_rectangle').style.display = 'none';
        document.getElementById('BOP_45_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_45_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_45_l_rectangle').style.display = 'none';
        document.getElementById('BOP_45_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_45_db_btn').style.display = 'none';
        document.getElementById('BOP_45_b_btn').style.display = 'none';
        document.getElementById('BOP_45_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_45_dl_btn').style.display = 'none';
        document.getElementById('BOP_45_l_btn').style.display = 'none';
        document.getElementById('BOP_45_ml_btn').style.display = 'none';
        
        document.getElementById('PI_45_db_rectangle').style.display = 'none';
        document.getElementById('PI_45_b_rectangle').style.display = 'none';
        document.getElementById('PI_45_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_45_dl_rectangle').style.display = 'none';
        document.getElementById('PI_45_l_rectangle').style.display = 'none';
        document.getElementById('PI_45_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_45_db_btn').style.display = 'none';
        document.getElementById('PI_45_b_btn').style.display = 'none';
        document.getElementById('PI_45_mb_btn').style.display = 'none';
        
        document.getElementById('PI_45_dl_btn').style.display = 'none';
        document.getElementById('PI_45_l_btn').style.display = 'none';
        document.getElementById('PI_45_ml_btn').style.display = 'none';
        
        
        document.getElementById('polygon_45_b').style.display = 'none';
        document.getElementById('polyline_an_45_b').style.display = 'none';
        document.getElementById('polyline_mg_45_b').style.display = 'none';
        
        document.getElementById('polygon_45_l').style.display = 'none';
        document.getElementById('polyline_an_45_l').style.display = 'none';
        document.getElementById('polyline_mg_45_l').style.display = 'none';
        
        document.getElementById('polygon_inter_46_45_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_46_45_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_46_45_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_46_45_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_46_45_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_46_45_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_45_44_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_45_44_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_45_44_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_45_44_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_45_44_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_45_44_l').style.display = 'none';            
        
        document.getElementById('note_45_txt').style.display = 'none';
    }
    else if (Implantat_45 !== 1) {
        Zahn_45 = 1;
        document.getElementById('tooth_line_45_b').style.display = 'none';
        document.getElementById('tooth_line_45_l').style.display = 'none';

        document.getElementById('mobility_45_txt').style.display = 'block';

        document.getElementById('implantat_45_btn').style.display = 'block';

        document.getElementById('mg_45_db_txt').style.display = 'block';
        document.getElementById('mg_45_b_txt').style.display = 'block';
        document.getElementById('mg_45_mb_txt').style.display = 'block';
        
        document.getElementById('st_45_db_txt').style.display = 'block';
        document.getElementById('st_45_b_txt').style.display = 'block';
        document.getElementById('st_45_mb_txt').style.display = 'block';
        
        document.getElementById('mg_45_dl_txt').style.display = 'block';
        document.getElementById('mg_45_l_txt').style.display = 'block';
        document.getElementById('mg_45_ml_txt').style.display = 'block';
        
        document.getElementById('st_45_dl_txt').style.display = 'block';
        document.getElementById('st_45_l_txt').style.display = 'block';
        document.getElementById('st_45_ml_txt').style.display = 'block';
        
        document.getElementById('note_45_txt').style.display = 'block';

        document.getElementById('polygon_45_b').style.display = 'block';
        document.getElementById('polyline_an_45_b').style.display = 'block';
        document.getElementById('polyline_mg_45_b').style.display = 'block';
        
        document.getElementById('polygon_45_l').style.display = 'block';
        document.getElementById('polyline_an_45_l').style.display = 'block';
        document.getElementById('polyline_mg_45_l').style.display = 'block';

        if (Zahn_46 == 1 && Zahn_45 == 1) {
            document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_l').style.display = 'block';            
        }
        
        if (Zahn_45 == 1 && Zahn_44 == 1) {
            document.getElementById('polygon_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_l').style.display = 'block';            
        }

        document.getElementById('BOP_45_db_btn').style.display = 'block';
        document.getElementById('BOP_45_b_btn').style.display = 'block';
        document.getElementById('BOP_45_mb_btn').style.display = 'block';

        document.getElementById('BOP_45_dl_btn').style.display = 'block';
        document.getElementById('BOP_45_l_btn').style.display = 'block';
        document.getElementById('BOP_45_ml_btn').style.display = 'block';
        
        if (BOP_45_db == 1) {
            document.getElementById('BOP_45_db_rectangle').style.display = 'block';
        }
        if (BOP_45_b == 1) {
            document.getElementById('BOP_45_b_rectangle').style.display = 'block';
        }
        if (BOP_45_mb == 1) {
            document.getElementById('BOP_45_mb_rectangle').style.display = 'block';
        }
        if (BOP_45_dl == 1) {
            document.getElementById('BOP_45_dl_rectangle').style.display = 'block';
        }
        if (BOP_45_l == 1) {
            document.getElementById('BOP_45_l_rectangle').style.display = 'block';
        }
        if (BOP_45_ml == 1) {
            document.getElementById('BOP_45_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_45_db_btn').style.display = 'block';
        document.getElementById('PI_45_b_btn').style.display = 'block';
        document.getElementById('PI_45_mb_btn').style.display = 'block';

        document.getElementById('PI_45_dl_btn').style.display = 'block';
        document.getElementById('PI_45_l_btn').style.display = 'block';
        document.getElementById('PI_45_ml_btn').style.display = 'block';
        
        if (PI_45_db == 1) {
            document.getElementById('PI_45_db_rectangle').style.display = 'block';
        }
        if (PI_45_b == 1) {
            document.getElementById('PI_45_b_rectangle').style.display = 'block';
        }
        if (PI_45_mb == 1) {
            document.getElementById('PI_45_mb_rectangle').style.display = 'block';
        }
        if (PI_45_dl == 1) {
            document.getElementById('PI_45_dl_rectangle').style.display = 'block';
        }
        if (PI_45_l == 1) {
            document.getElementById('PI_45_l_rectangle').style.display = 'block';
        }
        if (PI_45_ml == 1) {
            document.getElementById('PI_45_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_45 == 1) {
        Zahn_45 = 1;
        document.getElementById('tooth_line_45_b').style.display = 'none';
        document.getElementById('tooth_line_45_l').style.display = 'none';

        document.getElementById('mobility_45_txt').style.display = 'block';
        
        document.getElementById('note_45_txt').style.display = 'block';

        document.getElementById('implantat_45_btn').style.display = 'block';
        document.getElementById('implantat_45_tab').style.display = 'block';
        document.getElementById('implantat_45_b_image').style.display = 'block';
        document.getElementById('implantat_45_l_image').style.display = 'block';

        document.getElementById('mg_45_db_txt').style.display = 'block';
        document.getElementById('mg_45_b_txt').style.display = 'block';
        document.getElementById('mg_45_mb_txt').style.display = 'block';
        
        document.getElementById('st_45_db_txt').style.display = 'block';
        document.getElementById('st_45_b_txt').style.display = 'block';
        document.getElementById('st_45_mb_txt').style.display = 'block';
        
        document.getElementById('mg_45_dl_txt').style.display = 'block';
        document.getElementById('mg_45_l_txt').style.display = 'block';
        document.getElementById('mg_45_ml_txt').style.display = 'block';
        
        document.getElementById('st_45_dl_txt').style.display = 'block';
        document.getElementById('st_45_l_txt').style.display = 'block';
        document.getElementById('st_45_ml_txt').style.display = 'block';

        document.getElementById('polygon_45_b').style.display = 'block';
        document.getElementById('polyline_an_45_b').style.display = 'block';
        document.getElementById('polyline_mg_45_b').style.display = 'block';
        
        document.getElementById('polygon_45_l').style.display = 'block';
        document.getElementById('polyline_an_45_l').style.display = 'block';
        document.getElementById('polyline_mg_45_l').style.display = 'block';

        if (Zahn_46 == 1 && Zahn_45 == 1) {
            document.getElementById('polygon_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_46_45_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_46_45_l').style.display = 'block';            
        }
        
        if (Zahn_45 == 1 && Zahn_44 == 1) {
            document.getElementById('polygon_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_45_44_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_45_44_l').style.display = 'block';            
        }
        
        document.getElementById('BOP_45_db_btn').style.display = 'block';
        document.getElementById('BOP_45_b_btn').style.display = 'block';
        document.getElementById('BOP_45_mb_btn').style.display = 'block';

        document.getElementById('BOP_45_dl_btn').style.display = 'block';
        document.getElementById('BOP_45_l_btn').style.display = 'block';
        document.getElementById('BOP_45_ml_btn').style.display = 'block';
        
        document.getElementById('PI_45_db_btn').style.display = 'block';
        document.getElementById('PI_45_b_btn').style.display = 'block';
        document.getElementById('PI_45_mb_btn').style.display = 'block';

        document.getElementById('PI_45_dl_btn').style.display = 'block';
        document.getElementById('PI_45_l_btn').style.display = 'block';
        document.getElementById('PI_45_ml_btn').style.display = 'block';
        
        if (BOP_45_db == 1) {
            document.getElementById('BOP_45_db_rectangle').style.display = 'block';
        }
        if (BOP_45_b == 1) {
            document.getElementById('BOP_45_b_rectangle').style.display = 'block';
        }
        if (BOP_45_mb == 1) {
            document.getElementById('BOP_45_mb_rectangle').style.display = 'block';
        }
        if (BOP_45_dl == 1) {
            document.getElementById('BOP_45_dl_rectangle').style.display = 'block';
        }
        if (BOP_45_l == 1) {
            document.getElementById('BOP_45_l_rectangle').style.display = 'block';
        }
        if (BOP_45_ml == 1) {
            document.getElementById('BOP_45_ml_rectangle').style.display = 'block';
        }
        
        if (PI_45_db == 1) {
            document.getElementById('PI_45_db_rectangle').style.display = 'block';
        }
        if (PI_45_b == 1) {
            document.getElementById('PI_45_b_rectangle').style.display = 'block';
        }
        if (PI_45_mb == 1) {
            document.getElementById('PI_45_mb_rectangle').style.display = 'block';
        }
        if (PI_45_dl == 1) {
            document.getElementById('PI_45_dl_rectangle').style.display = 'block';
        }
        if (PI_45_l == 1) {
            document.getElementById('PI_45_l_rectangle').style.display = 'block';
        }
        if (PI_45_ml == 1) {
            document.getElementById('PI_45_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_45() {
    if (Implantat_45 == 0) {
        Implantat_45 = 1;
        
        document.getElementById('implantat_45_b_image').style.display = 'block';
        document.getElementById('implantat_45_l_image').style.display = 'block';
        document.getElementById('implantat_45_tab').style.display = 'block';
    }
    else {
        Implantat_45 = 0;
        
        document.getElementById('implantat_45_b_image').style.display = 'none';
        document.getElementById('implantat_45_l_image').style.display = 'none';
        document.getElementById('implantat_45_tab').style.display = 'none';
    }
}

function toggle_BOP_45_db() {
    if (BOP_45_db == 0) {
        BOP_45_db = 1;
        document.getElementById('BOP_45_db_rectangle').style.display = 'block';
    }
    else {
        BOP_45_db = 0;
        document.getElementById('BOP_45_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_45_b() {
    if (BOP_45_b == 0) {
        BOP_45_b = 1;
        document.getElementById('BOP_45_b_rectangle').style.display = 'block';
    }
    else {
        BOP_45_b = 0;
        document.getElementById('BOP_45_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_45_mb() {
    if (BOP_45_mb == 0) {
        BOP_45_mb = 1;
        document.getElementById('BOP_45_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_45_mb = 0;
        document.getElementById('BOP_45_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_45_db() {
    if (PI_45_db == 0) {
        PI_45_db = 1;
        document.getElementById('PI_45_db_rectangle').style.display = 'block';
    }
    else {
        PI_45_db = 0;
        document.getElementById('PI_45_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_45_b() {
    if (PI_45_b == 0) {
        PI_45_b = 1;
        document.getElementById('PI_45_b_rectangle').style.display = 'block';
    }
    else {
        PI_45_b = 0;
        document.getElementById('PI_45_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_45_mb() {
    if (PI_45_mb == 0) {
        PI_45_mb = 1;
        document.getElementById('PI_45_mb_rectangle').style.display = 'block';
    }
    else {
        PI_45_mb = 0;
        document.getElementById('PI_45_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_45_dl() {
    if (BOP_45_dl == 0) {
        BOP_45_dl = 1;
        document.getElementById('BOP_45_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_45_dl = 0;
        document.getElementById('BOP_45_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_45_l() {
    if (BOP_45_l == 0) {
        BOP_45_l = 1;
        document.getElementById('BOP_45_l_rectangle').style.display = 'block';
    }
    else {
        BOP_45_l = 0;
        document.getElementById('BOP_45_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_45_ml() {
    if (BOP_45_ml == 0) {
        BOP_45_ml = 1;
        document.getElementById('BOP_45_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_45_ml = 0;
        document.getElementById('BOP_45_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_45_dl() {
    if (PI_45_dl == 0) {
        PI_45_dl = 1;
        document.getElementById('PI_45_dl_rectangle').style.display = 'block';
    }
    else {
        PI_45_dl = 0;
        document.getElementById('PI_45_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_45_l() {
    if (PI_45_l == 0) {
        PI_45_l = 1;
        document.getElementById('PI_45_l_rectangle').style.display = 'block';
    }
    else {
        PI_45_l = 0;
        document.getElementById('PI_45_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_45_ml() {
    if (PI_45_ml == 0) {
        PI_45_ml = 1;
        document.getElementById('PI_45_ml_rectangle').style.display = 'block';
    }
    else {
        PI_45_ml = 0;
        document.getElementById('PI_45_ml_rectangle').style.display = 'none';
    }
}

function change_probing_45() {
    if (Zahn_45 == 1) {
        
    // Variablen aus dem Formular
        st_45_db = document.forms[0]["st_45_db"].value;
        st_45_b = document.forms[0]["st_45_b"].value;
        st_45_mb = document.forms[0]["st_45_mb"].value;

        if (document.forms[0]["st_45_dl"].value > 3) {document.forms[0]["st_45_dl"].style.color = 'red';} else {document.forms[0]["st_45_dl"].style.color = 'black'};
        if (document.forms[0]["st_45_l"].value > 3) {document.forms[0]["st_45_l"].style.color = 'red';} else {document.forms[0]["st_45_l"].style.color = 'black'};
        if (document.forms[0]["st_45_ml"].value > 3) {document.forms[0]["st_45_ml"].style.color = 'red';} else {document.forms[0]["st_45_ml"].style.color = 'black'};
        
        mg_45_db = document.forms[0]["mg_45_db"].value;
        mg_45_b = document.forms[0]["mg_45_b"].value;
        mg_45_mb = document.forms[0]["mg_45_mb"].value;
        
        st_45_dl = document.forms[0]["st_45_dl"].value;
        st_45_l = document.forms[0]["st_45_l"].value;
        st_45_ml = document.forms[0]["st_45_ml"].value;

        if (document.forms[0]["st_45_db"].value > 3) {document.forms[0]["st_45_db"].style.color = 'red';} else {document.forms[0]["st_45_db"].style.color = 'black'};
        if (document.forms[0]["st_45_b"].value > 3) {document.forms[0]["st_45_b"].style.color = 'red';} else {document.forms[0]["st_45_b"].style.color = 'black'};
        if (document.forms[0]["st_45_mb"].value > 3) {document.forms[0]["st_45_mb"].style.color = 'red';} else {document.forms[0]["st_45_mb"].style.color = 'black'};
        
        mg_45_dl = document.forms[0]["mg_45_dl"].value;
        mg_45_l = document.forms[0]["mg_45_l"].value;
        mg_45_ml = document.forms[0]["mg_45_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 45 (bukkal) in der Bitmap
        var x_db_45 = 492;							// distal 45
        var x_mb_45 = 513;							// mesial 45
        var x_b_45 = (x_db_45 + x_mb_45)/2;			// bukkal 45
        
    // Set der horizontalen Koordinaten von Zahn 45 (lingual) in der Bitmap
        var x_dl_45 = 489;							// distal 45
        var x_ml_45 = 513;							// mesial 45
        var x_l_45 = (x_dl_45 + x_ml_45)/2;			// lingual 45
        
    // Set der vertikalen Koordinaten von Zahn 45 (bukkal) aus dem Formular
        var y_mg_45_db = mg_UK_b - 6.05 * mg_45_db;	// Margo Gingivae distobukkal 45
        var y_mg_45_b = mg_UK_b - 6.05 * mg_45_b;	// Margo Gingivae bukkal 45
        var y_mg_45_mb = mg_UK_b - 6.05 * mg_45_mb;	// Margo Gingivae mesiobukkal 45
        var y_st_45_db = 6.05 * st_45_db;			// Sondierungstiefe distobukkal 45
        var y_st_45_b = 6.05 * st_45_b;				// Sondierungstiefe bukkal 45
        var y_st_45_mb = 6.05 * st_45_mb;			// Sondierungstiefe mesiobukkal 45
        
    // Set der vertikalen Koordinaten von Zahn 45 (lingual) aus dem Formular
        var y_mg_45_dl = mg_UK_l + 6.05 * mg_45_dl;	// Margo Gingivae distolingual 45
        var y_mg_45_l = mg_UK_l + 6.05 * mg_45_l;	// Margo Gingivae lingual 45
        var y_mg_45_ml = mg_UK_l + 6.05 * mg_45_ml;	// Margo Gingivae mesiolingual 45
        var y_st_45_dl = 6.05 * st_45_dl;			// Sondierungstiefe distolingual 45
        var y_st_45_l = 6.05 * st_45_l;				// Sondierungstiefe lingual 45
        var y_st_45_ml = 6.05 * st_45_ml;			// Sondierungstiefe mesiolingual 45
        
    // Berechnung des Attachmentniveaus 45 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_45_db = y_mg_45_db + y_st_45_db;	// Attachmentniveau distobukkal 45
        var y_an_45_b = y_mg_45_b + y_st_45_b;		// Attachmentniveau bukkal 45
        var y_an_45_mb = y_mg_45_mb + y_st_45_mb;	// Attachmentniveau mesiobukkal 45
        
    // Berechnung des Attachmentniveaus 45 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_45_dl = y_mg_45_dl - y_st_45_dl;	// Attachmentniveau distolingual 45
        var y_an_45_l = y_mg_45_l - y_st_45_l;		// Attachmentniveau lingual 45
        var y_an_45_ml = y_mg_45_ml - y_st_45_ml;	// Attachmentniveau mesiolingual 45
        
    // Parodontaltasche 45 bukkal zeichnen
        var string = 
            x_db_45 + ", " + y_an_45_db + "  " + 
            x_b_45 + ", " + y_an_45_b + "  " + 
            x_mb_45 + ", " + y_an_45_mb + "  " + 
            x_mb_45 + ", " + y_mg_45_mb + "  " + 
            x_b_45 + ", " + y_mg_45_b + "  " + 
            x_db_45 + ", " + y_mg_45_db;
        document.getElementById("polygon_45_b").setAttribute("points", string);
    // Attachmentniveau 45 bukkal zeichnen
        var string = 
            x_db_45 + ", " + y_an_45_db + "  " + 
            x_b_45 + ", " + y_an_45_b + "  " + 
            x_mb_45 + ", " + y_an_45_mb;
        document.getElementById("polyline_an_45_b").setAttribute("points", string);
    // Margo Gingivae 45 bukkal zeichnen
        var string =
            x_db_45 + ", " + y_mg_45_db + "  " + 
            x_b_45 + ", " + y_mg_45_b + "  " + 
            x_mb_45 + ", " + y_mg_45_mb;
        document.getElementById("polyline_mg_45_b").setAttribute("points", string);

    // Parodontaltasche 45 lingual zeichnen
        var string = 
            x_dl_45 + ", " + y_an_45_dl + "  " + 
            x_l_45 + ", " + y_an_45_l + "  " + 
            x_ml_45 + ", " + y_an_45_ml + "  " + 
            x_ml_45 + ", " + y_mg_45_ml + "  " + 
            x_l_45 + ", " + y_mg_45_l + "  " + 
            x_dl_45 + ", " + y_mg_45_dl;
        document.getElementById("polygon_45_l").setAttribute("points", string);
    // Attachmentniveau 45 lingual zeichnen
        var string = 
            x_dl_45 + ", " + y_an_45_dl + "  " + 
            x_l_45 + ", " + y_an_45_l + "  " + 
            x_ml_45 + ", " + y_an_45_ml;
        document.getElementById("polyline_an_45_l").setAttribute("points", string);
    // Margo Gingivae 45 lingual zeichnen
        var string =
            x_dl_45 + ", " + y_mg_45_dl + "  " + 
            x_l_45 + ", " + y_mg_45_l + "  " + 
            x_ml_45 + ", " + y_mg_45_ml;
        document.getElementById("polyline_mg_45_l").setAttribute("points", string);
    }
    if (Zahn_45 == 1 && Zahn_44 == 1) {

        st_44_db = document.forms[0]["st_44_db"].value;
        mg_44_db = document.forms[0]["mg_44_db"].value;
        
        st_44_dl = document.forms[0]["st_44_dl"].value;
        mg_44_dl = document.forms[0]["mg_44_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 44 (bukkal) in der Bitmap
        var x_db_44 = 533;							// distal 44
        
    // Set der horizontalen Koordinaten von Zahn 44 (lingual) in der Bitmap
        var x_dl_44 = 531;							// distal 44
        
    // Set der vertikalen Koordinaten von Zahn 44 (bukkal) aus dem Formular
        var y_mg_44_db = mg_UK_b - 6.05 * mg_44_db;	// Margo Gingivae distobukkal 44
        var y_st_44_db = 6.05 * st_44_db;			// Sondierungstiefe distobukkal 44
        
    // Set der vertikalen Koordinaten von Zahn 44 (lingual) aus dem Formular
        var y_mg_44_dl = mg_UK_l + 6.05 * mg_44_dl;	// Margo Gingivae distolingual 44
        var y_st_44_dl = 6.05 * st_44_dl;			// Sondierungstiefe distolingual 44
        
    // Berechnung des Attachmentniveaus 44 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_44_db = y_mg_44_db + y_st_44_db;	// Attachmentniveau distobukkal 44
        
    // Berechnung des Attachmentniveaus 44 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_44_dl = y_mg_44_dl - y_st_44_dl;	// Attachmentniveau distolingual 44

    // Parodontaltasche inter_45_44 bukkal zeichnen
        var string = 
            x_mb_45 + ", " + y_an_45_mb + "  " + 
            x_db_44 + ", " + y_an_44_db + "  " + 
            x_db_44 + ", " + y_mg_44_db + "  " + 
            x_mb_45 + ", " + y_mg_45_mb;
        document.getElementById("polygon_inter_45_44_b").setAttribute("points", string);
    // Attachmentniveau inter_45_44 bukkal zeichnen
        var string = 
            x_mb_45 + ", " + y_an_45_mb + "  " + 
            x_db_44 + ", " + y_an_44_db;
        document.getElementById("polyline_an_inter_45_44_b").setAttribute("points", string);
    // Margo Gingivae inter_45_44 bukkal zeichnen
        var string =
            x_mb_45 + ", " + y_mg_45_mb + "  " + 
            x_db_44 + ", " + y_mg_44_db;
        document.getElementById("polyline_mg_inter_45_44_b").setAttribute("points", string);

    // Parodontaltasche inter_45_44 lingual zeichnen
        var string = 
            x_ml_45 + ", " + y_an_45_ml + "  " + 
            x_dl_44 + ", " + y_an_44_dl + "  " + 
            x_dl_44 + ", " + y_mg_44_dl + "  " + 
            x_ml_45 + ", " + y_mg_45_ml;
        document.getElementById("polygon_inter_45_44_l").setAttribute("points", string);
    // Attachmentniveau inter_45_44 lingual zeichnen
        var string = 
            x_ml_45 + ", " + y_an_45_ml + "  " + 
            x_dl_44 + ", " + y_an_44_dl;
        document.getElementById("polyline_an_inter_45_44_l").setAttribute("points", string);
    // Margo Gingivae inter_45_44 lingual zeichnen
        var string =
            x_ml_45 + ", " + y_mg_45_ml + "  " + 
            x_dl_44 + ", " + y_mg_44_dl;
        document.getElementById("polyline_mg_inter_45_44_l").setAttribute("points", string);
    }
    if (Zahn_46 == 1 && Zahn_45 == 1) {

        st_46_mb = document.forms[0]["st_46_mb"].value;
        mg_46_mb = document.forms[0]["mg_46_mb"].value;
        
        st_46_ml = document.forms[0]["st_46_ml"].value;
        mg_46_ml = document.forms[0]["mg_46_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
        var x_mb_46 = 469;							// mesial 46
        
    // Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
        var x_ml_46 = 469;							// mesial 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
        var y_mg_46_mb = mg_UK_b - 6.05 * mg_46_mb;	// Margo Gingivae mesiobukkal 46
        var y_st_46_mb = 6.05 * st_46_mb;			// Sondierungstiefe mesiobukkal 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
        var y_mg_46_ml = mg_UK_l + 6.05 * mg_46_ml;	// Margo Gingivae mesiolingual 46
        var y_st_46_ml = 6.05 * st_46_ml;			// Sondierungstiefe mesiolingual 46
        
    // Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_46_mb = y_mg_46_mb + y_st_46_mb;	// Attachmentniveau mesiobukkal 46
        
    // Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_46_ml = y_mg_46_ml - y_st_46_ml;	// Attachmentniveau mesiolingual 46

    // Parodontaltasche inter_46_45 bukkal zeichnen
        var string = 
            x_mb_46 + ", " + y_an_46_mb + "  " + 
            x_db_45 + ", " + y_an_45_db + "  " + 
            x_db_45 + ", " + y_mg_45_db + "  " + 
            x_mb_46 + ", " + y_mg_46_mb;
        document.getElementById("polygon_inter_46_45_b").setAttribute("points", string);
    // Attachmentniveau inter_46_45 bukkal zeichnen
        var string = 
            x_mb_46 + ", " + y_an_46_mb + "  " + 
            x_db_45 + ", " + y_an_45_db;
        document.getElementById("polyline_an_inter_46_45_b").setAttribute("points", string);
    // Margo Gingivae inter_46_45 bukkal zeichnen
        var string =
            x_mb_46 + ", " + y_mg_46_mb + "  " + 
            x_db_45 + ", " + y_mg_45_db;
        document.getElementById("polyline_mg_inter_46_45_b").setAttribute("points", string);

    // Parodontaltasche inter_46_45 lingual zeichnen
        var string = 
            x_ml_46 + ", " + y_an_46_ml + "  " + 
            x_dl_45 + ", " + y_an_45_dl + "  " + 
            x_dl_45 + ", " + y_mg_45_dl + "  " + 
            x_ml_46 + ", " + y_mg_46_ml;
        document.getElementById("polygon_inter_46_45_l").setAttribute("points", string);
    // Attachmentniveau inter_46_45 lingual zeichnen
        var string = 
            x_ml_46 + ", " + y_an_46_ml + "  " + 
            x_dl_45 + ", " + y_an_45_dl;
        document.getElementById("polyline_an_inter_46_45_l").setAttribute("points", string);
    // Margo Gingivae inter_46_45 lingual zeichnen
        var string =
            x_ml_46 + ", " + y_mg_46_ml + "  " + 
            x_dl_45 + ", " + y_mg_45_dl;
        document.getElementById("polyline_mg_inter_46_45_l").setAttribute("points", string);
    }
}