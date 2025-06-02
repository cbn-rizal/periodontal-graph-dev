	// Definition der Variablen fÃ¼r das Formular
    var Zahn_37 = 1;
    var Furkation_37_b = 0;
    var Furkation_37_l = 0;
    var Implantat_37 = 0;
    var BOP_37_db = 0;
    var BOP_37_b = 0;
    var BOP_37_mb = 0;
    var PI_37_db = 0;
    var PI_37_b = 0;
    var PI_37_mb = 0;
    var BOP_37_dl = 0;
    var BOP_37_l = 0;
    var BOP_37_ml = 0;
    var PI_37_dl = 0;
    var PI_37_l = 0;
    var PI_37_ml = 0;
    var mg_37_db = 0;
    var mg_37_b = 0;
    var mg_37_mb = 0;
    var st_37_db = 0;
    var st_37_b = 0;
    var st_37_mb = 0;
    var mg_37_dl = 0;
    var mg_37_l = 0;
    var mg_37_ml = 0;
    var st_37_dl = 0;
    var st_37_l = 0;
    var st_37_ml = 0;

function clear_data_37() {
    if (Zahn_37 == 1) {
        mg_37_db = 0;
        mg_37_b = 0;
        mg_37_mb = 0;
        st_37_db = 0;
        st_37_b = 0;
        st_37_mb = 0;

            document.getElementById('mg_37_db_txt').value = 0;
            document.getElementById('mg_37_b_txt').value = 0;
            document.getElementById('mg_37_mb_txt').value = 0;
            
            document.getElementById('st_37_db_txt').value = 0;
            document.getElementById('st_37_b_txt').value = 0;
            document.getElementById('st_37_mb_txt').value = 0;
        
            document.forms[0]["st_37_db"].style.color = 'black'
            document.forms[0]["st_37_b"].style.color = 'black'
            document.forms[0]["st_37_mb"].style.color = 'black'
        
        mg_37_dl = 0;
        mg_37_l = 0;
        mg_37_ml = 0;
        st_37_dl = 0;
        st_37_l = 0;
        st_37_ml = 0;

            document.getElementById('mg_37_dl_txt').value = 0;
            document.getElementById('mg_37_l_txt').value = 0;
            document.getElementById('mg_37_ml_txt').value = 0;
            
            document.getElementById('st_37_dl_txt').value = 0;
            document.getElementById('st_37_l_txt').value = 0;
            document.getElementById('st_37_ml_txt').value = 0;

            document.forms[0]["st_37_dl"].style.color = 'black'
            document.forms[0]["st_37_l"].style.color = 'black'
            document.forms[0]["st_37_ml"].style.color = 'black'
        
        change_probing_37();
        
        mobility_37 = 0;

            document.getElementById('mobility_37_txt').value = "0";

        note_37 = "";

            document.getElementById('note_37_txt').value = "";

        Furkation_37_b = 0;
        Furkation_37_l = 0;

            document.getElementById('furkation_1_37_b').style.display = 'none';
            document.getElementById('furkation_2_37_b').style.display = 'none';
            document.getElementById('furkation_3_37_b').style.display = 'none';
                
            document.getElementById('furkation_1_37_b_tab').style.display = 'none';
            document.getElementById('furkation_2_37_b_tab').style.display = 'none';
            document.getElementById('furkation_3_37_b_tab').style.display = 'none';
            
            document.getElementById('furkation_1_37_l').style.display = 'none';
            document.getElementById('furkation_2_37_l').style.display = 'none';
            document.getElementById('furkation_3_37_l').style.display = 'none';
                
            document.getElementById('furkation_1_37_l_tab').style.display = 'none';
            document.getElementById('furkation_2_37_l_tab').style.display = 'none';
            document.getElementById('furkation_3_37_l_tab').style.display = 'none';
            
        BOP_37_db = 0;
        BOP_37_b = 0;
        BOP_37_mb = 0;
                
        BOP_37_dl = 0;
        BOP_37_l = 0;
        BOP_37_ml = 0;
                
            document.getElementById('BOP_37_db_rectangle').style.display = 'none';
            document.getElementById('BOP_37_b_rectangle').style.display = 'none';
            document.getElementById('BOP_37_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_37_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_37_l_rectangle').style.display = 'none';
            document.getElementById('BOP_37_ml_rectangle').style.display = 'none';
            
        PI_37_db = 0;
        PI_37_b = 0;
        PI_37_mb = 0;
                
        PI_37_dl = 0;
        PI_37_l = 0;
        PI_37_ml = 0;

            document.getElementById('PI_37_db_rectangle').style.display = 'none';
            document.getElementById('PI_37_b_rectangle').style.display = 'none';
            document.getElementById('PI_37_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_37_dl_rectangle').style.display = 'none';
            document.getElementById('PI_37_l_rectangle').style.display = 'none';
            document.getElementById('PI_37_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_37() {
    if (Zahn_37 === 1) {
        Zahn_37 = 0;
        document.getElementById('tooth_line_37_b').style.display = 'block';
        document.getElementById('tooth_line_37_l').style.display = 'block';
        
        document.getElementById('mobility_37_txt').style.display = 'none';
        
        document.getElementById('implantat_37_btn').style.display = 'none';
        document.getElementById('implantat_37_tab').style.display = 'none';
        document.getElementById('implantat_37_b_image').style.display = 'none';
        document.getElementById('implantat_37_l_image').style.display = 'none';
        
        document.getElementById('furkation_37_b_btn').style.display = 'none';
        document.getElementById('furkation_37_l_btn').style.display = 'none';
        
        document.getElementById('furkation_1_37_b').style.display = 'none';
        document.getElementById('furkation_2_37_b').style.display = 'none';
        document.getElementById('furkation_3_37_b').style.display = 'none';
        
        document.getElementById('furkation_1_37_b_tab').style.display = 'none';
        document.getElementById('furkation_2_37_b_tab').style.display = 'none';
        document.getElementById('furkation_3_37_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_l').style.display = 'none';
        document.getElementById('furkation_2_37_l').style.display = 'none';
        document.getElementById('furkation_3_37_l').style.display = 'none';
        
        document.getElementById('furkation_1_37_l_tab').style.display = 'none';
        document.getElementById('furkation_2_37_l_tab').style.display = 'none';
        document.getElementById('furkation_3_37_l_tab').style.display = 'none';
        
        document.getElementById('mg_37_db_txt').style.display = 'none';
        document.getElementById('mg_37_b_txt').style.display = 'none';
        document.getElementById('mg_37_mb_txt').style.display = 'none';
        
        document.getElementById('st_37_db_txt').style.display = 'none';
        document.getElementById('st_37_b_txt').style.display = 'none';
        document.getElementById('st_37_mb_txt').style.display = 'none';
        
        document.getElementById('mg_37_dl_txt').style.display = 'none';
        document.getElementById('mg_37_l_txt').style.display = 'none';
        document.getElementById('mg_37_ml_txt').style.display = 'none';
        
        document.getElementById('st_37_dl_txt').style.display = 'none';
        document.getElementById('st_37_l_txt').style.display = 'none';
        document.getElementById('st_37_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_37_db_rectangle').style.display = 'none';
        document.getElementById('BOP_37_b_rectangle').style.display = 'none';
        document.getElementById('BOP_37_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_37_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_37_l_rectangle').style.display = 'none';
        document.getElementById('BOP_37_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_37_db_btn').style.display = 'none';
        document.getElementById('BOP_37_b_btn').style.display = 'none';
        document.getElementById('BOP_37_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_37_dl_btn').style.display = 'none';
        document.getElementById('BOP_37_l_btn').style.display = 'none';
        document.getElementById('BOP_37_ml_btn').style.display = 'none';
        
        document.getElementById('PI_37_db_rectangle').style.display = 'none';
        document.getElementById('PI_37_b_rectangle').style.display = 'none';
        document.getElementById('PI_37_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_37_dl_rectangle').style.display = 'none';
        document.getElementById('PI_37_l_rectangle').style.display = 'none';
        document.getElementById('PI_37_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_37_db_btn').style.display = 'none';
        document.getElementById('PI_37_b_btn').style.display = 'none';
        document.getElementById('PI_37_mb_btn').style.display = 'none';
        
        document.getElementById('PI_37_dl_btn').style.display = 'none';
        document.getElementById('PI_37_l_btn').style.display = 'none';
        document.getElementById('PI_37_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_37_b').style.display = 'none';
        document.getElementById('polyline_an_37_b').style.display = 'none';
        document.getElementById('polyline_mg_37_b').style.display = 'none';
        
        document.getElementById('polygon_37_l').style.display = 'none';
        document.getElementById('polyline_an_37_l').style.display = 'none';
        document.getElementById('polyline_mg_37_l').style.display = 'none';
        
        document.getElementById('polygon_inter_38_37_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_38_37_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_38_37_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_38_37_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_38_37_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_38_37_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_37_36_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_37_36_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_37_36_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_37_36_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_37_36_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_37_36_l').style.display = 'none';            
    }
    else if (Implantat_37 !== 1) {
        Zahn_37 = 1;
        document.getElementById('tooth_line_37_b').style.display = 'none';
        document.getElementById('tooth_line_37_l').style.display = 'none';

        document.getElementById('mobility_37_txt').style.display = 'block';

        document.getElementById('implantat_37_btn').style.display = 'block';

        document.getElementById('furkation_37_b_btn').style.display = 'block';
        document.getElementById('furkation_37_l_btn').style.display = 'block';
        
        document.getElementById('mg_37_db_txt').style.display = 'block';
        document.getElementById('mg_37_b_txt').style.display = 'block';
        document.getElementById('mg_37_mb_txt').style.display = 'block';
        
        document.getElementById('st_37_db_txt').style.display = 'block';
        document.getElementById('st_37_b_txt').style.display = 'block';
        document.getElementById('st_37_mb_txt').style.display = 'block';
        
        document.getElementById('mg_37_dl_txt').style.display = 'block';
        document.getElementById('mg_37_l_txt').style.display = 'block';
        document.getElementById('mg_37_ml_txt').style.display = 'block';
        
        document.getElementById('st_37_dl_txt').style.display = 'block';
        document.getElementById('st_37_l_txt').style.display = 'block';
        document.getElementById('st_37_ml_txt').style.display = 'block';
        
        document.getElementById('note_37_txt').style.display = 'block';

        document.getElementById('polygon_37_b').style.display = 'block';
        document.getElementById('polyline_an_37_b').style.display = 'block';
        document.getElementById('polyline_mg_37_b').style.display = 'block';
        
        document.getElementById('polygon_37_l').style.display = 'block';
        document.getElementById('polyline_an_37_l').style.display = 'block';
        document.getElementById('polyline_mg_37_l').style.display = 'block';

        if (Tooth_38 == 1 && Zahn_37 == 1) {
            document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_l').style.display = 'block';            
        }
        
        if (Zahn_37 == 1 && Zahn_36 == 1) {
            document.getElementById('polygon_inter_37_36_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_37_36_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_37_36_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_37_36_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_37_36_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_37_36_l').style.display = 'block';            
        }

        if (Furkation_37_b == 1) {
            document.getElementById('furkation_1_37_b').style.display = 'block';
        } else if (Furkation_37_b == 2) {
            document.getElementById('furkation_2_37_b').style.display = 'block';
        } else if (Furkation_37_b == 3) {
            document.getElementById('furkation_3_37_b').style.display = 'block';
        }
        if (Furkation_37_b == 1) {
            document.getElementById('furkation_1_37_b_tab').style.display = 'block';
        } else if (Furkation_37_b == 2) {
            document.getElementById('furkation_2_37_b_tab').style.display = 'block';
        } else if (Furkation_37_b == 3) {
            document.getElementById('furkation_3_37_b_tab').style.display = 'block';
        }
        if (Furkation_37_l == 1) {
            document.getElementById('furkation_1_37_l').style.display = 'block';
        } else if (Furkation_37_l == 2) {
            document.getElementById('furkation_2_37_l').style.display = 'block';
        } else if (Furkation_37_l == 3) {
            document.getElementById('furkation_3_37_l').style.display = 'block';
        }
        if (Furkation_37_l == 1) {
            document.getElementById('furkation_1_37_l_tab').style.display = 'block';
        } else if (Furkation_37_l == 2) {
            document.getElementById('furkation_2_37_l_tab').style.display = 'block';
        } else if (Furkation_37_l == 3) {
            document.getElementById('furkation_3_37_l_tab').style.display = 'block';
        }

        document.getElementById('BOP_37_db_btn').style.display = 'block';
        document.getElementById('BOP_37_b_btn').style.display = 'block';
        document.getElementById('BOP_37_mb_btn').style.display = 'block';

        document.getElementById('BOP_37_dl_btn').style.display = 'block';
        document.getElementById('BOP_37_l_btn').style.display = 'block';
        document.getElementById('BOP_37_ml_btn').style.display = 'block';
        
        if (BOP_37_db == 1) {
            document.getElementById('BOP_37_db_rectangle').style.display = 'block';
        }
        if (BOP_37_b == 1) {
            document.getElementById('BOP_37_b_rectangle').style.display = 'block';
        }
        if (BOP_37_mb == 1) {
            document.getElementById('BOP_37_mb_rectangle').style.display = 'block';
        }
        if (BOP_37_dl == 1) {
            document.getElementById('BOP_37_dl_rectangle').style.display = 'block';
        }
        if (BOP_37_l == 1) {
            document.getElementById('BOP_37_l_rectangle').style.display = 'block';
        }
        if (BOP_37_ml == 1) {
            document.getElementById('BOP_37_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_37_db_btn').style.display = 'block';
        document.getElementById('PI_37_b_btn').style.display = 'block';
        document.getElementById('PI_37_mb_btn').style.display = 'block';

        document.getElementById('PI_37_dl_btn').style.display = 'block';
        document.getElementById('PI_37_l_btn').style.display = 'block';
        document.getElementById('PI_37_ml_btn').style.display = 'block';
        
        if (PI_37_db == 1) {
            document.getElementById('PI_37_db_rectangle').style.display = 'block';
        }
        if (PI_37_b == 1) {
            document.getElementById('PI_37_b_rectangle').style.display = 'block';
        }
        if (PI_37_mb == 1) {
            document.getElementById('PI_37_mb_rectangle').style.display = 'block';
        }
        if (PI_37_dl == 1) {
            document.getElementById('PI_37_dl_rectangle').style.display = 'block';
        }
        if (PI_37_l == 1) {
            document.getElementById('PI_37_l_rectangle').style.display = 'block';
        }
        if (PI_37_ml == 1) {
            document.getElementById('PI_37_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_37 == 1) {
        Zahn_37 = 1;
        document.getElementById('tooth_line_37_b').style.display = 'none';
        document.getElementById('tooth_line_37_l').style.display = 'none';

        document.getElementById('mobility_37_txt').style.display = 'block';
        
        document.getElementById('note_37_txt').style.display = 'block';

        document.getElementById('implantat_37_btn').style.display = 'block';
        document.getElementById('implantat_37_tab').style.display = 'block';
        document.getElementById('implantat_37_b_image').style.display = 'block';
        document.getElementById('implantat_37_l_image').style.display = 'block';

        document.getElementById('mg_37_db_txt').style.display = 'block';
        document.getElementById('mg_37_b_txt').style.display = 'block';
        document.getElementById('mg_37_mb_txt').style.display = 'block';
        
        document.getElementById('st_37_db_txt').style.display = 'block';
        document.getElementById('st_37_b_txt').style.display = 'block';
        document.getElementById('st_37_mb_txt').style.display = 'block';
        
        document.getElementById('mg_37_dl_txt').style.display = 'block';
        document.getElementById('mg_37_l_txt').style.display = 'block';
        document.getElementById('mg_37_ml_txt').style.display = 'block';
        
        document.getElementById('st_37_dl_txt').style.display = 'block';
        document.getElementById('st_37_l_txt').style.display = 'block';
        document.getElementById('st_37_ml_txt').style.display = 'block';

        document.getElementById('polygon_37_b').style.display = 'block';
        document.getElementById('polyline_an_37_b').style.display = 'block';
        document.getElementById('polyline_mg_37_b').style.display = 'block';
        
        document.getElementById('polygon_37_l').style.display = 'block';
        document.getElementById('polyline_an_37_l').style.display = 'block';
        document.getElementById('polyline_mg_37_l').style.display = 'block';

        if (Tooth_38 == 1 && Zahn_37 == 1) {
            document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_l').style.display = 'block';            
        }
        
        if (Zahn_37 == 1 && Zahn_36 == 1) {
            document.getElementById('polygon_inter_37_36_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_37_36_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_37_36_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_37_36_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_37_36_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_37_36_l').style.display = 'block';            
        }

        document.getElementById('BOP_37_db_btn').style.display = 'block';
        document.getElementById('BOP_37_b_btn').style.display = 'block';
        document.getElementById('BOP_37_mb_btn').style.display = 'block';

        document.getElementById('BOP_37_dl_btn').style.display = 'block';
        document.getElementById('BOP_37_l_btn').style.display = 'block';
        document.getElementById('BOP_37_ml_btn').style.display = 'block';
        
        document.getElementById('PI_37_db_btn').style.display = 'block';
        document.getElementById('PI_37_b_btn').style.display = 'block';
        document.getElementById('PI_37_mb_btn').style.display = 'block';

        document.getElementById('PI_37_dl_btn').style.display = 'block';
        document.getElementById('PI_37_l_btn').style.display = 'block';
        document.getElementById('PI_37_ml_btn').style.display = 'block';
        
        if (BOP_37_db == 1) {
            document.getElementById('BOP_37_db_rectangle').style.display = 'block';
        }
        if (BOP_37_b == 1) {
            document.getElementById('BOP_37_b_rectangle').style.display = 'block';
        }
        if (BOP_37_mb == 1) {
            document.getElementById('BOP_37_mb_rectangle').style.display = 'block';
        }
        if (BOP_37_dl == 1) {
            document.getElementById('BOP_37_dl_rectangle').style.display = 'block';
        }
        if (BOP_37_l == 1) {
            document.getElementById('BOP_37_l_rectangle').style.display = 'block';
        }
        if (BOP_37_ml == 1) {
            document.getElementById('BOP_37_ml_rectangle').style.display = 'block';
        }
        
        if (PI_37_db == 1) {
            document.getElementById('PI_37_db_rectangle').style.display = 'block';
        }
        if (PI_37_b == 1) {
            document.getElementById('PI_37_b_rectangle').style.display = 'block';
        }
        if (PI_37_mb == 1) {
            document.getElementById('PI_37_mb_rectangle').style.display = 'block';
        }
        if (PI_37_dl == 1) {
            document.getElementById('PI_37_dl_rectangle').style.display = 'block';
        }
        if (PI_37_l == 1) {
            document.getElementById('PI_37_l_rectangle').style.display = 'block';
        }
        if (PI_37_ml == 1) {
            document.getElementById('PI_37_ml_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_37() {
    if (Implantat_37 == 0) {
        Implantat_37 = 1;
        
        document.getElementById('implantat_37_b_image').style.display = 'block';
        document.getElementById('implantat_37_l_image').style.display = 'block';
        document.getElementById('implantat_37_tab').style.display = 'block';
        
        document.getElementById('furkation_37_b_btn').style.display = 'none';
        document.getElementById('furkation_37_l_btn').style.display = 'none';
        
        document.getElementById('furkation_1_37_b').style.display = 'none';
        document.getElementById('furkation_2_37_b').style.display = 'none';
        document.getElementById('furkation_3_37_b').style.display = 'none';
        
        document.getElementById('furkation_1_37_b_tab').style.display = 'none';
        document.getElementById('furkation_2_37_b_tab').style.display = 'none';
        document.getElementById('furkation_3_37_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_l').style.display = 'none';
        document.getElementById('furkation_2_37_l').style.display = 'none';
        document.getElementById('furkation_3_37_l').style.display = 'none';
        
        document.getElementById('furkation_1_37_l_tab').style.display = 'none';
        document.getElementById('furkation_2_37_l_tab').style.display = 'none';
        document.getElementById('furkation_3_37_l_tab').style.display = 'none';
    }
    else {
        Implantat_37 = 0;
        
        document.getElementById('implantat_37_b_image').style.display = 'none';
        document.getElementById('implantat_37_l_image').style.display = 'none';
        document.getElementById('implantat_37_tab').style.display = 'none';
        
        document.getElementById('furkation_37_b_btn').style.display = 'block';
        document.getElementById('furkation_37_l_btn').style.display = 'block';

        if (Furkation_37_b == 1) {
            document.getElementById('furkation_1_37_b').style.display = 'block';
        } else if (Furkation_37_b == 2) {
            document.getElementById('furkation_2_37_b').style.display = 'block';
        } else if (Furkation_37_b == 3) {
            document.getElementById('furkation_3_37_b').style.display = 'block';
        }
        if (Furkation_37_b == 1) {
            document.getElementById('furkation_1_37_b_tab').style.display = 'block';
        } else if (Furkation_37_b == 2) {
            document.getElementById('furkation_2_37_b_tab').style.display = 'block';
        } else if (Furkation_37_b == 3) {
            document.getElementById('furkation_3_37_b_tab').style.display = 'block';
        }
        if (Furkation_37_l == 1) {
            document.getElementById('furkation_1_37_l').style.display = 'block';
        } else if (Furkation_37_l == 2) {
            document.getElementById('furkation_2_37_l').style.display = 'block';
        } else if (Furkation_37_l == 3) {
            document.getElementById('furkation_3_37_l').style.display = 'block';
        }
        if (Furkation_37_l == 1) {
            document.getElementById('furkation_1_37_l_tab').style.display = 'block';
        } else if (Furkation_37_l == 2) {
            document.getElementById('furkation_2_37_l_tab').style.display = 'block';
        } else if (Furkation_37_l == 3) {
            document.getElementById('furkation_3_37_l_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_37_b() {
    if (Furkation_37_b == 0) {
        document.getElementById('furkation_1_37_b_tab').style.display = 'block';
        document.getElementById('furkation_2_37_b_tab').style.display = 'none';
        document.getElementById('furkation_3_37_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_b').style.display = 'block';
        document.getElementById('furkation_2_37_b').style.display = 'none';
        document.getElementById('furkation_3_37_b').style.display = 'none';

        Furkation_37_b = 1;
    }
    else if (Furkation_37_b == 1) {
        document.getElementById('furkation_1_37_b_tab').style.display = 'none';
        document.getElementById('furkation_2_37_b_tab').style.display = 'block';
        document.getElementById('furkation_3_37_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_b').style.display = 'none';
        document.getElementById('furkation_2_37_b').style.display = 'block';
        document.getElementById('furkation_3_37_b').style.display = 'none';
        
        Furkation_37_b = 2;
    }
    else if (Furkation_37_b == 2) {
        document.getElementById('furkation_1_37_b_tab').style.display = 'none';
        document.getElementById('furkation_2_37_b_tab').style.display = 'none';
        document.getElementById('furkation_3_37_b_tab').style.display = 'block';
        
        document.getElementById('furkation_1_37_b').style.display = 'none';
        document.getElementById('furkation_2_37_b').style.display = 'none';
        document.getElementById('furkation_3_37_b').style.display = 'block';
                    
        Furkation_37_b = 3;
    }
    else if (Furkation_37_b == 3) {
        document.getElementById('furkation_1_37_b_tab').style.display = 'none';
        document.getElementById('furkation_2_37_b_tab').style.display = 'none';
        document.getElementById('furkation_3_37_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_b').style.display = 'none';
        document.getElementById('furkation_2_37_b').style.display = 'none';
        document.getElementById('furkation_3_37_b').style.display = 'none';
                    
        Furkation_37_b = 0;
    }
}

function toggle_furcation_37_l() {
    if (Furkation_37_l == 0) {
        document.getElementById('furkation_1_37_l_tab').style.display = 'block';
        document.getElementById('furkation_2_37_l_tab').style.display = 'none';
        document.getElementById('furkation_3_37_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_l').style.display = 'block';
        document.getElementById('furkation_2_37_l').style.display = 'none';
        document.getElementById('furkation_3_37_l').style.display = 'none';

        Furkation_37_l = 1;
    }
    else if (Furkation_37_l == 1) {
        document.getElementById('furkation_1_37_l_tab').style.display = 'none';
        document.getElementById('furkation_2_37_l_tab').style.display = 'block';
        document.getElementById('furkation_3_37_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_l').style.display = 'none';
        document.getElementById('furkation_2_37_l').style.display = 'block';
        document.getElementById('furkation_3_37_l').style.display = 'none';
        
        Furkation_37_l = 2;
    }
    else if (Furkation_37_l == 2) {
        document.getElementById('furkation_1_37_l_tab').style.display = 'none';
        document.getElementById('furkation_2_37_l_tab').style.display = 'none';
        document.getElementById('furkation_3_37_l_tab').style.display = 'block';
        
        document.getElementById('furkation_1_37_l').style.display = 'none';
        document.getElementById('furkation_2_37_l').style.display = 'none';
        document.getElementById('furkation_3_37_l').style.display = 'block';
                    
        Furkation_37_l = 3;
    }
    else if (Furkation_37_l == 3) {
        document.getElementById('furkation_1_37_l_tab').style.display = 'none';
        document.getElementById('furkation_2_37_l_tab').style.display = 'none';
        document.getElementById('furkation_3_37_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_37_l').style.display = 'none';
        document.getElementById('furkation_2_37_l').style.display = 'none';
        document.getElementById('furkation_3_37_l').style.display = 'none';
                    
        Furkation_37_l = 0;
    }
}

function toggle_BOP_37_db() {
    if (BOP_37_db == 0) {
        BOP_37_db = 1;
        document.getElementById('BOP_37_db_rectangle').style.display = 'block';
    }
    else {
        BOP_37_db = 0;
        document.getElementById('BOP_37_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_37_b() {
    if (BOP_37_b == 0) {
        BOP_37_b = 1;
        document.getElementById('BOP_37_b_rectangle').style.display = 'block';
    }
    else {
        BOP_37_b = 0;
        document.getElementById('BOP_37_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_37_mb() {
    if (BOP_37_mb == 0) {
        BOP_37_mb = 1;
        document.getElementById('BOP_37_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_37_mb = 0;
        document.getElementById('BOP_37_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_37_db() {
    if (PI_37_db == 0) {
        PI_37_db = 1;
        document.getElementById('PI_37_db_rectangle').style.display = 'block';
    }
    else {
        PI_37_db = 0;
        document.getElementById('PI_37_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_37_b() {
    if (PI_37_b == 0) {
        PI_37_b = 1;
        document.getElementById('PI_37_b_rectangle').style.display = 'block';
    }
    else {
        PI_37_b = 0;
        document.getElementById('PI_37_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_37_mb() {
    if (PI_37_mb == 0) {
        PI_37_mb = 1;
        document.getElementById('PI_37_mb_rectangle').style.display = 'block';
    }
    else {
        PI_37_mb = 0;
        document.getElementById('PI_37_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_37_dl() {
    if (BOP_37_dl == 0) {
        BOP_37_dl = 1;
        document.getElementById('BOP_37_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_37_dl = 0;
        document.getElementById('BOP_37_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_37_l() {
    if (BOP_37_l == 0) {
        BOP_37_l = 1;
        document.getElementById('BOP_37_l_rectangle').style.display = 'block';
    }
    else {
        BOP_37_l = 0;
        document.getElementById('BOP_37_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_37_ml() {
    if (BOP_37_ml == 0) {
        BOP_37_ml = 1;
        document.getElementById('BOP_37_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_37_ml = 0;
        document.getElementById('BOP_37_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_37_dl() {
    if (PI_37_dl == 0) {
        PI_37_dl = 1;
        document.getElementById('PI_37_dl_rectangle').style.display = 'block';
    }
    else {
        PI_37_dl = 0;
        document.getElementById('PI_37_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_37_l() {
    if (PI_37_l == 0) {
        PI_37_l = 1;
        document.getElementById('PI_37_l_rectangle').style.display = 'block';
    }
    else {
        PI_37_l = 0;
        document.getElementById('PI_37_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_37_ml() {
    if (PI_37_ml == 0) {
        PI_37_ml = 1;
        document.getElementById('PI_37_ml_rectangle').style.display = 'block';
    }
    else {
        PI_37_ml = 0;
        document.getElementById('PI_37_ml_rectangle').style.display = 'none';
    }
}

function change_probing_37() {
    if (Zahn_37 == 1) {
        
    // Variablen aus dem Formular
        st_37_db = document.forms[0]["st_37_db"].value;
        st_37_b = document.forms[0]["st_37_b"].value;
        st_37_mb = document.forms[0]["st_37_mb"].value;

        if (document.forms[0]["st_37_dl"].value > 3) {document.forms[0]["st_37_dl"].style.color = 'red';} else {document.forms[0]["st_37_dl"].style.color = 'black'};
        if (document.forms[0]["st_37_l"].value > 3) {document.forms[0]["st_37_l"].style.color = 'red';} else {document.forms[0]["st_37_l"].style.color = 'black'};
        if (document.forms[0]["st_37_ml"].value > 3) {document.forms[0]["st_37_ml"].style.color = 'red';} else {document.forms[0]["st_37_ml"].style.color = 'black'};
        
        mg_37_db = document.forms[0]["mg_37_db"].value;
        mg_37_b = document.forms[0]["mg_37_b"].value;
        mg_37_mb = document.forms[0]["mg_37_mb"].value;
        
        st_37_dl = document.forms[0]["st_37_dl"].value;
        st_37_l = document.forms[0]["st_37_l"].value;
        st_37_ml = document.forms[0]["st_37_ml"].value;

        if (document.forms[0]["st_37_db"].value > 3) {document.forms[0]["st_37_db"].style.color = 'red';} else {document.forms[0]["st_37_db"].style.color = 'black'};
        if (document.forms[0]["st_37_b"].value > 3) {document.forms[0]["st_37_b"].style.color = 'red';} else {document.forms[0]["st_37_b"].style.color = 'black'};
        if (document.forms[0]["st_37_mb"].value > 3) {document.forms[0]["st_37_mb"].style.color = 'red';} else {document.forms[0]["st_37_mb"].style.color = 'black'};
        
        mg_37_dl = document.forms[0]["mg_37_dl"].value;
        mg_37_l = document.forms[0]["mg_37_l"].value;
        mg_37_ml = document.forms[0]["mg_37_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
        var x_db_37 = 999;							// distal 37
        var x_mb_37 = 952;							// mesial 37
        var x_b_37 = (x_db_37 + x_mb_37)/2;			// bukkal 37
        
    // Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
        var x_dl_37 = 995;							// distal 37
        var x_ml_37 = 947;							// mesial 37
        var x_l_37 = (x_dl_37 + x_ml_37)/2;			// lingual 37
        
    // Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
        var y_mg_37_db = mg_UK_b - 6.05 * mg_37_db;	// Margo Gingivae distobukkal 37
        var y_mg_37_b = mg_UK_b - 6.05 * mg_37_b;	// Margo Gingivae bukkal 37
        var y_mg_37_mb = mg_UK_b - 6.05 * mg_37_mb;	// Margo Gingivae mesiobukkal 37
        var y_st_37_db = 6.05 * st_37_db;			// Sondierungstiefe distobukkal 37
        var y_st_37_b = 6.05 * st_37_b;				// Sondierungstiefe bukkal 37
        var y_st_37_mb = 6.05 * st_37_mb;			// Sondierungstiefe mesiobukkal 37
        
    // Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
        var y_mg_37_dl = mg_UK_l + 6.05 * mg_37_dl;	// Margo Gingivae distolingual 37
        var y_mg_37_l = mg_UK_l + 6.05 * mg_37_l;	// Margo Gingivae lingual 37
        var y_mg_37_ml = mg_UK_l + 6.05 * mg_37_ml;	// Margo Gingivae mesiolingual 37
        var y_st_37_dl = 6.05 * st_37_dl;			// Sondierungstiefe distolingual 37
        var y_st_37_l = 6.05 * st_37_l;				// Sondierungstiefe lingual 37
        var y_st_37_ml = 6.05 * st_37_ml;			// Sondierungstiefe mesiolingual 37
        
    // Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_37_db = y_mg_37_db + y_st_37_db;	// Attachmentniveau distobukkal 37
        var y_an_37_b = y_mg_37_b + y_st_37_b;		// Attachmentniveau bukkal 37
        var y_an_37_mb = y_mg_37_mb + y_st_37_mb;	// Attachmentniveau mesiobukkal 37
        
    // Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_37_dl = y_mg_37_dl - y_st_37_dl;	// Attachmentniveau distolingual 37
        var y_an_37_l = y_mg_37_l - y_st_37_l;		// Attachmentniveau lingual 37
        var y_an_37_ml = y_mg_37_ml - y_st_37_ml;	// Attachmentniveau mesiolingual 37
        
    // Parodontaltasche 37 bukkal zeichnen
        var string = 
            x_db_37 + ", " + y_an_37_db + "  " + 
            x_b_37 + ", " + y_an_37_b + "  " + 
            x_mb_37 + ", " + y_an_37_mb + "  " + 
            x_mb_37 + ", " + y_mg_37_mb + "  " + 
            x_b_37 + ", " + y_mg_37_b + "  " + 
            x_db_37 + ", " + y_mg_37_db;
        document.getElementById("polygon_37_b").setAttribute("points", string);
    // Attachmentniveau 37 bukkal zeichnen
        var string = 
            x_db_37 + ", " + y_an_37_db + "  " + 
            x_b_37 + ", " + y_an_37_b + "  " + 
            x_mb_37 + ", " + y_an_37_mb;
        document.getElementById("polyline_an_37_b").setAttribute("points", string);
    // Margo Gingivae 37 bukkal zeichnen
        var string =
            x_db_37 + ", " + y_mg_37_db + "  " + 
            x_b_37 + ", " + y_mg_37_b + "  " + 
            x_mb_37 + ", " + y_mg_37_mb;
        document.getElementById("polyline_mg_37_b").setAttribute("points", string);

    // Parodontaltasche 37 lingual zeichnen
        var string = 
            x_dl_37 + ", " + y_an_37_dl + "  " + 
            x_l_37 + ", " + y_an_37_l + "  " + 
            x_ml_37 + ", " + y_an_37_ml + "  " + 
            x_ml_37 + ", " + y_mg_37_ml + "  " + 
            x_l_37 + ", " + y_mg_37_l + "  " + 
            x_dl_37 + ", " + y_mg_37_dl;
        document.getElementById("polygon_37_l").setAttribute("points", string);
    // Attachmentniveau 37 lingual zeichnen
        var string = 
            x_dl_37 + ", " + y_an_37_dl + "  " + 
            x_l_37 + ", " + y_an_37_l + "  " + 
            x_ml_37 + ", " + y_an_37_ml;
        document.getElementById("polyline_an_37_l").setAttribute("points", string);
    // Margo Gingivae 37 lingual zeichnen
        var string =
            x_dl_37 + ", " + y_mg_37_dl + "  " + 
            x_l_37 + ", " + y_mg_37_l + "  " + 
            x_ml_37 + ", " + y_mg_37_ml;
        document.getElementById("polyline_mg_37_l").setAttribute("points", string);
    }
    if (Zahn_37 == 1 && Zahn_36 == 1) {

        st_36_db = document.forms[0]["st_36_db"].value;
        mg_36_db = document.forms[0]["mg_36_db"].value;
        
        st_36_dl = document.forms[0]["st_36_dl"].value;
        mg_36_dl = document.forms[0]["mg_36_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
        var x_db_36 = 936;							// distal 46
        
    // Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
        var x_dl_36 = 932;							// distal 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
        var y_mg_36_db = mg_UK_b - 6.05 * mg_36_db;	// Margo Gingivae distobukkal 46
        var y_st_36_db = 6.05 * st_36_db;			// Sondierungstiefe distobukkal 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
        var y_mg_36_dl = mg_UK_l + 6.05 * mg_36_dl;	// Margo Gingivae distolingual 46
        var y_st_36_dl = 6.05 * st_36_dl;			// Sondierungstiefe distolingual 46
        
    // Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_36_db = y_mg_36_db + y_st_36_db;	// Attachmentniveau distobukkal 46
        
    // Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_36_dl = y_mg_36_dl - y_st_36_dl;	// Attachmentniveau distolingual 46

    // Parodontaltasche inter_37_36 bukkal zeichnen
        var string = 
            x_mb_37 + ", " + y_an_37_mb + "  " + 
            x_db_36 + ", " + y_an_36_db + "  " + 
            x_db_36 + ", " + y_mg_36_db + "  " + 
            x_mb_37 + ", " + y_mg_37_mb;
        document.getElementById("polygon_inter_37_36_b").setAttribute("points", string);
    // Attachmentniveau inter_37_36 bukkal zeichnen
        var string = 
            x_mb_37 + ", " + y_an_37_mb + "  " + 
            x_db_36 + ", " + y_an_36_db;
        document.getElementById("polyline_an_inter_37_36_b").setAttribute("points", string);
    // Margo Gingivae inter_37_36 bukkal zeichnen
        var string =
            x_mb_37 + ", " + y_mg_37_mb + "  " + 
            x_db_36 + ", " + y_mg_36_db;
        document.getElementById("polyline_mg_inter_37_36_b").setAttribute("points", string);

    // Parodontaltasche inter_37_36 lingual zeichnen
        var string = 
            x_ml_37 + ", " + y_an_37_ml + "  " + 
            x_dl_36 + ", " + y_an_36_dl + "  " + 
            x_dl_36 + ", " + y_mg_36_dl + "  " + 
            x_ml_37 + ", " + y_mg_37_ml;
        document.getElementById("polygon_inter_37_36_l").setAttribute("points", string);
    // Attachmentniveau inter_37_36 lingual zeichnen
        var string = 
            x_ml_37 + ", " + y_an_37_ml + "  " + 
            x_dl_36 + ", " + y_an_36_dl;
        document.getElementById("polyline_an_inter_37_36_l").setAttribute("points", string);
    // Margo Gingivae inter_37_36 lingual zeichnen
        var string =
            x_ml_37 + ", " + y_mg_37_ml + "  " + 
            x_dl_36 + ", " + y_mg_36_dl;
        document.getElementById("polyline_mg_inter_37_36_l").setAttribute("points", string);
    }
    if (Tooth_38 == 1 && Zahn_37 == 1) {

        st_38_mb = document.forms[0]["st_38_mb"].value;
        mg_38_mb = document.forms[0]["mg_38_mb"].value;
        
        st_38_ml = document.forms[0]["st_38_ml"].value;
        mg_38_ml = document.forms[0]["mg_38_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
        var x_mb_38 = 1016;							// mesial 48
        
    // Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
        var x_ml_38 = 1012;							// mesial 48
        
    // Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
        var y_mg_38_mb = mg_UK_b - 6.05 * mg_38_mb;	// Margo Gingivae mesiobukkal 48
        var y_st_38_mb = 6.05 * st_38_mb;			// Sondierungstiefe mesiobukkal 48
        
    // Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
        var y_mg_38_ml = mg_UK_l + 6.05 * mg_38_ml;	// Margo Gingivae mesiolingual 48
        var y_st_38_ml = 6.05 * st_38_ml;			// Sondierungstiefe mesiolingual 48
        
    // Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_38_mb = y_mg_38_mb + y_st_38_mb;	// Attachmentniveau mesiobukkal 48
        
    // Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_38_ml = y_mg_38_ml - y_st_38_ml;	// Attachmentniveau mesiolingual 48

    // Parodontaltasche inter_38_37 bukkal zeichnen
        var string = 
            x_mb_38 + ", " + y_an_38_mb + "  " + 
            x_db_37 + ", " + y_an_37_db + "  " + 
            x_db_37 + ", " + y_mg_37_db + "  " + 
            x_mb_38 + ", " + y_mg_38_mb;
        document.getElementById("polygon_inter_38_37_b").setAttribute("points", string);
    // Attachmentniveau inter_38_37 bukkal zeichnen
        var string = 
            x_mb_38 + ", " + y_an_38_mb + "  " + 
            x_db_37 + ", " + y_an_37_db;
        document.getElementById("polyline_an_inter_38_37_b").setAttribute("points", string);
    // Margo Gingivae inter_38_37 bukkal zeichnen
        var string =
            x_mb_38 + ", " + y_mg_38_mb + "  " + 
            x_db_37 + ", " + y_mg_37_db;
        document.getElementById("polyline_mg_inter_38_37_b").setAttribute("points", string);

    // Parodontaltasche inter_38_37 lingual zeichnen
        var string = 
            x_ml_38 + ", " + y_an_38_ml + "  " + 
            x_dl_37 + ", " + y_an_37_dl + "  " + 
            x_dl_37 + ", " + y_mg_37_dl + "  " + 
            x_ml_38 + ", " + y_mg_38_ml;
        document.getElementById("polygon_inter_38_37_l").setAttribute("points", string);
    // Attachmentniveau inter_38_37 lingual zeichnen
        var string = 
            x_ml_38 + ", " + y_an_38_ml + "  " + 
            x_dl_37 + ", " + y_an_37_dl;
        document.getElementById("polyline_an_inter_38_37_l").setAttribute("points", string);
    // Margo Gingivae inter_38_37 lingual zeichnen
        var string =
            x_ml_38 + ", " + y_mg_38_ml + "  " + 
            x_dl_37 + ", " + y_mg_37_dl;
        document.getElementById("polyline_mg_inter_38_37_l").setAttribute("points", string);
    }
}