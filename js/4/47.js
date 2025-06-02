	// Definition der Variablen fÃ¼r das Formular
    var Tooth_47 = 1;
    var Furkation_47_b = 0;
    var Furkation_47_l = 0;
    var Implantat_47 = 0;
    var BOP_47_db = 0;
    var BOP_47_b = 0;
    var BOP_47_mb = 0;
    var PI_47_db = 0;
    var PI_47_b = 0;
    var PI_47_mb = 0;
    var BOP_47_dl = 0;
    var BOP_47_l = 0;
    var BOP_47_ml = 0;
    var PI_47_dl = 0;
    var PI_47_l = 0;
    var PI_47_ml = 0;
    var mg_47_db = 0;
    var mg_47_b = 0;
    var mg_47_mb = 0;
    var st_47_db = 0;
    var st_47_b = 0;
    var st_47_mb = 0;
    var mg_47_dl = 0;
    var mg_47_l = 0;
    var mg_47_ml = 0;
    var st_47_dl = 0;
    var st_47_l = 0;
    var st_47_ml = 0;

function clear_data_47() {
    if (Tooth_47 == 1) {
        mg_47_db = 0;
        mg_47_b = 0;
        mg_47_mb = 0;
        st_47_db = 0;
        st_47_b = 0;
        st_47_mb = 0;

            document.getElementById('mg_47_db_txt').value = 0;
            document.getElementById('mg_47_b_txt').value = 0;
            document.getElementById('mg_47_mb_txt').value = 0;
            
            document.getElementById('st_47_db_txt').value = 0;
            document.getElementById('st_47_b_txt').value = 0;
            document.getElementById('st_47_mb_txt').value = 0;
        
            document.forms[0]["st_47_db"].style.color = 'black'
            document.forms[0]["st_47_b"].style.color = 'black'
            document.forms[0]["st_47_mb"].style.color = 'black'
        
        mg_47_dl = 0;
        mg_47_l = 0;
        mg_47_ml = 0;
        st_47_dl = 0;
        st_47_l = 0;
        st_47_ml = 0;

            document.getElementById('mg_47_dl_txt').value = 0;
            document.getElementById('mg_47_l_txt').value = 0;
            document.getElementById('mg_47_ml_txt').value = 0;
            
            document.getElementById('st_47_dl_txt').value = 0;
            document.getElementById('st_47_l_txt').value = 0;
            document.getElementById('st_47_ml_txt').value = 0;

            document.forms[0]["st_47_dl"].style.color = 'black'
            document.forms[0]["st_47_l"].style.color = 'black'
            document.forms[0]["st_47_ml"].style.color = 'black'
        
        change_probing_47();
        
        mobility_47 = 0;

            document.getElementById('mobility_47_txt').value = "0";

        note_47 = "";

            document.getElementById('note_47_txt').value = "";

        Furkation_47_b = 0;
        Furkation_47_l = 0;

            document.getElementById('furkation_1_47_b').style.display = 'none';
            document.getElementById('furkation_2_47_b').style.display = 'none';
            document.getElementById('furkation_3_47_b').style.display = 'none';
                
            document.getElementById('furkation_1_47_b_tab').style.display = 'none';
            document.getElementById('furkation_2_47_b_tab').style.display = 'none';
            document.getElementById('furkation_3_47_b_tab').style.display = 'none';
            
            document.getElementById('furkation_1_47_l').style.display = 'none';
            document.getElementById('furkation_2_47_l').style.display = 'none';
            document.getElementById('furkation_3_47_l').style.display = 'none';
                
            document.getElementById('furkation_1_47_l_tab').style.display = 'none';
            document.getElementById('furkation_2_47_l_tab').style.display = 'none';
            document.getElementById('furkation_3_47_l_tab').style.display = 'none';
            
        BOP_47_db = 0;
        BOP_47_b = 0;
        BOP_47_mb = 0;
                
        BOP_47_dl = 0;
        BOP_47_l = 0;
        BOP_47_ml = 0;
                
            document.getElementById('BOP_47_db_rectangle').style.display = 'none';
            document.getElementById('BOP_47_b_rectangle').style.display = 'none';
            document.getElementById('BOP_47_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_47_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_47_l_rectangle').style.display = 'none';
            document.getElementById('BOP_47_ml_rectangle').style.display = 'none';
            
        PI_47_db = 0;
        PI_47_b = 0;
        PI_47_mb = 0;
                
        PI_47_dl = 0;
        PI_47_l = 0;
        PI_47_ml = 0;

            document.getElementById('PI_47_db_rectangle').style.display = 'none';
            document.getElementById('PI_47_b_rectangle').style.display = 'none';
            document.getElementById('PI_47_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_47_dl_rectangle').style.display = 'none';
            document.getElementById('PI_47_l_rectangle').style.display = 'none';
            document.getElementById('PI_47_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_47() {
    if (Tooth_47 === 1) {
        Tooth_47 = 0;
        document.getElementById('tooth_line_47_b').style.display = 'block';
        document.getElementById('tooth_line_47_l').style.display = 'block';
        
        document.getElementById('mobility_47_txt').style.display = 'none';
        
        document.getElementById('implantat_47_btn').style.display = 'none';
        document.getElementById('implantat_47_tab').style.display = 'none';
        document.getElementById('implantat_47_b_image').style.display = 'none';
        document.getElementById('implantat_47_l_image').style.display = 'none';
        
        document.getElementById('furkation_47_b_btn').style.display = 'none';
        document.getElementById('furkation_47_l_btn').style.display = 'none';
        
        document.getElementById('furkation_1_47_b').style.display = 'none';
        document.getElementById('furkation_2_47_b').style.display = 'none';
        document.getElementById('furkation_3_47_b').style.display = 'none';
        
        document.getElementById('furkation_1_47_b_tab').style.display = 'none';
        document.getElementById('furkation_2_47_b_tab').style.display = 'none';
        document.getElementById('furkation_3_47_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_l').style.display = 'none';
        document.getElementById('furkation_2_47_l').style.display = 'none';
        document.getElementById('furkation_3_47_l').style.display = 'none';
        
        document.getElementById('furkation_1_47_l_tab').style.display = 'none';
        document.getElementById('furkation_2_47_l_tab').style.display = 'none';
        document.getElementById('furkation_3_47_l_tab').style.display = 'none';
        
        document.getElementById('mg_47_db_txt').style.display = 'none';
        document.getElementById('mg_47_b_txt').style.display = 'none';
        document.getElementById('mg_47_mb_txt').style.display = 'none';
        
        document.getElementById('st_47_db_txt').style.display = 'none';
        document.getElementById('st_47_b_txt').style.display = 'none';
        document.getElementById('st_47_mb_txt').style.display = 'none';
        
        document.getElementById('mg_47_dl_txt').style.display = 'none';
        document.getElementById('mg_47_l_txt').style.display = 'none';
        document.getElementById('mg_47_ml_txt').style.display = 'none';
        
        document.getElementById('st_47_dl_txt').style.display = 'none';
        document.getElementById('st_47_l_txt').style.display = 'none';
        document.getElementById('st_47_ml_txt').style.display = 'none';
                    
        document.getElementById('BOP_47_db_rectangle').style.display = 'none';
        document.getElementById('BOP_47_b_rectangle').style.display = 'none';
        document.getElementById('BOP_47_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_47_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_47_l_rectangle').style.display = 'none';
        document.getElementById('BOP_47_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_47_db_btn').style.display = 'none';
        document.getElementById('BOP_47_b_btn').style.display = 'none';
        document.getElementById('BOP_47_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_47_dl_btn').style.display = 'none';
        document.getElementById('BOP_47_l_btn').style.display = 'none';
        document.getElementById('BOP_47_ml_btn').style.display = 'none';
        
        document.getElementById('PI_47_db_rectangle').style.display = 'none';
        document.getElementById('PI_47_b_rectangle').style.display = 'none';
        document.getElementById('PI_47_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_47_dl_rectangle').style.display = 'none';
        document.getElementById('PI_47_l_rectangle').style.display = 'none';
        document.getElementById('PI_47_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_47_db_btn').style.display = 'none';
        document.getElementById('PI_47_b_btn').style.display = 'none';
        document.getElementById('PI_47_mb_btn').style.display = 'none';
        
        document.getElementById('PI_47_dl_btn').style.display = 'none';
        document.getElementById('PI_47_l_btn').style.display = 'none';
        document.getElementById('PI_47_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_47_b').style.display = 'none';
        document.getElementById('polyline_an_47_b').style.display = 'none';
        document.getElementById('polyline_mg_47_b').style.display = 'none';
        
        document.getElementById('polygon_47_l').style.display = 'none';
        document.getElementById('polyline_an_47_l').style.display = 'none';
        document.getElementById('polyline_mg_47_l').style.display = 'none';
        
        document.getElementById('polygon_inter_48_47_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_48_47_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_48_47_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_48_47_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_48_47_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_48_47_l').style.display = 'none';            
        
        document.getElementById('polygon_inter_47_46_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_47_46_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_47_46_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_47_46_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_47_46_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_47_46_l').style.display = 'none';            
        
        document.getElementById('note_47_txt').style.display = 'none';
    }
    else if (Implantat_47 !== 1) {
        Tooth_47 = 1;
        document.getElementById('tooth_line_47_b').style.display = 'none';
        document.getElementById('tooth_line_47_l').style.display = 'none';

        document.getElementById('mobility_47_txt').style.display = 'block';

        document.getElementById('implantat_47_btn').style.display = 'block';

        document.getElementById('furkation_47_b_btn').style.display = 'block';
        document.getElementById('furkation_47_l_btn').style.display = 'block';
        
        document.getElementById('mg_47_db_txt').style.display = 'block';
        document.getElementById('mg_47_b_txt').style.display = 'block';
        document.getElementById('mg_47_mb_txt').style.display = 'block';
        
        document.getElementById('st_47_db_txt').style.display = 'block';
        document.getElementById('st_47_b_txt').style.display = 'block';
        document.getElementById('st_47_mb_txt').style.display = 'block';
        
        document.getElementById('mg_47_dl_txt').style.display = 'block';
        document.getElementById('mg_47_l_txt').style.display = 'block';
        document.getElementById('mg_47_ml_txt').style.display = 'block';
        
        document.getElementById('st_47_dl_txt').style.display = 'block';
        document.getElementById('st_47_l_txt').style.display = 'block';
        document.getElementById('st_47_ml_txt').style.display = 'block';
        
        document.getElementById('note_47_txt').style.display = 'block';

        document.getElementById('polygon_47_b').style.display = 'block';
        document.getElementById('polyline_an_47_b').style.display = 'block';
        document.getElementById('polyline_mg_47_b').style.display = 'block';
        
        document.getElementById('polygon_47_l').style.display = 'block';
        document.getElementById('polyline_an_47_l').style.display = 'block';
        document.getElementById('polyline_mg_47_l').style.display = 'block';

        if (Tooth_48 == 1 && Tooth_47 == 1) {
            document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_l').style.display = 'block';            
        }
        
        if (Tooth_47 == 1 && Tooth_46 == 1) {
            document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_l').style.display = 'block';            
        }

        if (Furkation_47_b == 1) {
            document.getElementById('furkation_1_47_b').style.display = 'block';
        } else if (Furkation_47_b == 2) {
            document.getElementById('furkation_2_47_b').style.display = 'block';
        } else if (Furkation_47_b == 3) {
            document.getElementById('furkation_3_47_b').style.display = 'block';
        }
        if (Furkation_47_b == 1) {
            document.getElementById('furkation_1_47_b_tab').style.display = 'block';
        } else if (Furkation_47_b == 2) {
            document.getElementById('furkation_2_47_b_tab').style.display = 'block';
        } else if (Furkation_47_b == 3) {
            document.getElementById('furkation_3_47_b_tab').style.display = 'block';
        }
        if (Furkation_47_l == 1) {
            document.getElementById('furkation_1_47_l').style.display = 'block';
        } else if (Furkation_47_l == 2) {
            document.getElementById('furkation_2_47_l').style.display = 'block';
        } else if (Furkation_47_l == 3) {
            document.getElementById('furkation_3_47_l').style.display = 'block';
        }
        if (Furkation_47_l == 1) {
            document.getElementById('furkation_1_47_l_tab').style.display = 'block';
        } else if (Furkation_47_l == 2) {
            document.getElementById('furkation_2_47_l_tab').style.display = 'block';
        } else if (Furkation_47_l == 3) {
            document.getElementById('furkation_3_47_l_tab').style.display = 'block';
        }

        document.getElementById('BOP_47_db_btn').style.display = 'block';
        document.getElementById('BOP_47_b_btn').style.display = 'block';
        document.getElementById('BOP_47_mb_btn').style.display = 'block';

        document.getElementById('BOP_47_dl_btn').style.display = 'block';
        document.getElementById('BOP_47_l_btn').style.display = 'block';
        document.getElementById('BOP_47_ml_btn').style.display = 'block';
        
        if (BOP_47_db == 1) {
            document.getElementById('BOP_47_db_rectangle').style.display = 'block';
        }
        if (BOP_47_b == 1) {
            document.getElementById('BOP_47_b_rectangle').style.display = 'block';
        }
        if (BOP_47_mb == 1) {
            document.getElementById('BOP_47_mb_rectangle').style.display = 'block';
        }
        if (BOP_47_dl == 1) {
            document.getElementById('BOP_47_dl_rectangle').style.display = 'block';
        }
        if (BOP_47_l == 1) {
            document.getElementById('BOP_47_l_rectangle').style.display = 'block';
        }
        if (BOP_47_ml == 1) {
            document.getElementById('BOP_47_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_47_db_btn').style.display = 'block';
        document.getElementById('PI_47_b_btn').style.display = 'block';
        document.getElementById('PI_47_mb_btn').style.display = 'block';

        document.getElementById('PI_47_dl_btn').style.display = 'block';
        document.getElementById('PI_47_l_btn').style.display = 'block';
        document.getElementById('PI_47_ml_btn').style.display = 'block';
        
        if (PI_47_db == 1) {
            document.getElementById('PI_47_db_rectangle').style.display = 'block';
        }
        if (PI_47_b == 1) {
            document.getElementById('PI_47_b_rectangle').style.display = 'block';
        }
        if (PI_47_mb == 1) {
            document.getElementById('PI_47_mb_rectangle').style.display = 'block';
        }
        if (PI_47_dl == 1) {
            document.getElementById('PI_47_dl_rectangle').style.display = 'block';
        }
        if (PI_47_l == 1) {
            document.getElementById('PI_47_l_rectangle').style.display = 'block';
        }
        if (PI_47_ml == 1) {
            document.getElementById('PI_47_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_47 == 1) {
        Tooth_47 = 1;
        document.getElementById('tooth_line_47_b').style.display = 'none';
        document.getElementById('tooth_line_47_l').style.display = 'none';

        document.getElementById('mobility_47_txt').style.display = 'block';
        
        document.getElementById('note_47_txt').style.display = 'block';

        document.getElementById('implantat_47_btn').style.display = 'block';
        document.getElementById('implantat_47_tab').style.display = 'block';
        document.getElementById('implantat_47_b_image').style.display = 'block';
        document.getElementById('implantat_47_l_image').style.display = 'block';

        document.getElementById('mg_47_db_txt').style.display = 'block';
        document.getElementById('mg_47_b_txt').style.display = 'block';
        document.getElementById('mg_47_mb_txt').style.display = 'block';
        
        document.getElementById('st_47_db_txt').style.display = 'block';
        document.getElementById('st_47_b_txt').style.display = 'block';
        document.getElementById('st_47_mb_txt').style.display = 'block';
        
        document.getElementById('mg_47_dl_txt').style.display = 'block';
        document.getElementById('mg_47_l_txt').style.display = 'block';
        document.getElementById('mg_47_ml_txt').style.display = 'block';
        
        document.getElementById('st_47_dl_txt').style.display = 'block';
        document.getElementById('st_47_l_txt').style.display = 'block';
        document.getElementById('st_47_ml_txt').style.display = 'block';

        document.getElementById('polygon_47_b').style.display = 'block';
        document.getElementById('polyline_an_47_b').style.display = 'block';
        document.getElementById('polyline_mg_47_b').style.display = 'block';
        
        document.getElementById('polygon_47_l').style.display = 'block';
        document.getElementById('polyline_an_47_l').style.display = 'block';
        document.getElementById('polyline_mg_47_l').style.display = 'block';

        if (Tooth_48 == 1 && Tooth_47 == 1) {
            document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_l').style.display = 'block';            
        }
        
        if (Tooth_47 == 1 && Tooth_46 == 1) {
            document.getElementById('polygon_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_47_46_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_47_46_l').style.display = 'block';            
        }

        document.getElementById('BOP_47_db_btn').style.display = 'block';
        document.getElementById('BOP_47_b_btn').style.display = 'block';
        document.getElementById('BOP_47_mb_btn').style.display = 'block';

        document.getElementById('BOP_47_dl_btn').style.display = 'block';
        document.getElementById('BOP_47_l_btn').style.display = 'block';
        document.getElementById('BOP_47_ml_btn').style.display = 'block';
        
        document.getElementById('PI_47_db_btn').style.display = 'block';
        document.getElementById('PI_47_b_btn').style.display = 'block';
        document.getElementById('PI_47_mb_btn').style.display = 'block';

        document.getElementById('PI_47_dl_btn').style.display = 'block';
        document.getElementById('PI_47_l_btn').style.display = 'block';
        document.getElementById('PI_47_ml_btn').style.display = 'block';
        
        if (BOP_47_db == 1) {
            document.getElementById('BOP_47_db_rectangle').style.display = 'block';
        }
        if (BOP_47_b == 1) {
            document.getElementById('BOP_47_b_rectangle').style.display = 'block';
        }
        if (BOP_47_mb == 1) {
            document.getElementById('BOP_47_mb_rectangle').style.display = 'block';
        }
        if (BOP_47_dl == 1) {
            document.getElementById('BOP_47_dl_rectangle').style.display = 'block';
        }
        if (BOP_47_l == 1) {
            document.getElementById('BOP_47_l_rectangle').style.display = 'block';
        }
        if (BOP_47_ml == 1) {
            document.getElementById('BOP_47_ml_rectangle').style.display = 'block';
        }
        
        if (PI_47_db == 1) {
            document.getElementById('PI_47_db_rectangle').style.display = 'block';
        }
        if (PI_47_b == 1) {
            document.getElementById('PI_47_b_rectangle').style.display = 'block';
        }
        if (PI_47_mb == 1) {
            document.getElementById('PI_47_mb_rectangle').style.display = 'block';
        }
        if (PI_47_dl == 1) {
            document.getElementById('PI_47_dl_rectangle').style.display = 'block';
        }
        if (PI_47_l == 1) {
            document.getElementById('PI_47_l_rectangle').style.display = 'block';
        }
        if (PI_47_ml == 1) {
            document.getElementById('PI_47_ml_rectangle').style.display = 'block';
        }
    }
}		

function toggle_implant_47() {
    if (Implantat_47 == 0) {
        Implantat_47 = 1;
        
        document.getElementById('implantat_47_b_image').style.display = 'block';
        document.getElementById('implantat_47_l_image').style.display = 'block';
        document.getElementById('implantat_47_tab').style.display = 'block';
        
        document.getElementById('furkation_47_b_btn').style.display = 'none';
        document.getElementById('furkation_47_l_btn').style.display = 'none';
        
        document.getElementById('furkation_1_47_b').style.display = 'none';
        document.getElementById('furkation_2_47_b').style.display = 'none';
        document.getElementById('furkation_3_47_b').style.display = 'none';
        
        document.getElementById('furkation_1_47_b_tab').style.display = 'none';
        document.getElementById('furkation_2_47_b_tab').style.display = 'none';
        document.getElementById('furkation_3_47_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_l').style.display = 'none';
        document.getElementById('furkation_2_47_l').style.display = 'none';
        document.getElementById('furkation_3_47_l').style.display = 'none';
        
        document.getElementById('furkation_1_47_l_tab').style.display = 'none';
        document.getElementById('furkation_2_47_l_tab').style.display = 'none';
        document.getElementById('furkation_3_47_l_tab').style.display = 'none';
    }
    else {
        Implantat_47 = 0;
        
        document.getElementById('implantat_47_b_image').style.display = 'none';
        document.getElementById('implantat_47_l_image').style.display = 'none';
        document.getElementById('implantat_47_tab').style.display = 'none';
        
        document.getElementById('furkation_47_b_btn').style.display = 'block';
        document.getElementById('furkation_47_l_btn').style.display = 'block';

        if (Furkation_47_b == 1) {
            document.getElementById('furkation_1_47_b').style.display = 'block';
        } else if (Furkation_47_b == 2) {
            document.getElementById('furkation_2_47_b').style.display = 'block';
        } else if (Furkation_47_b == 3) {
            document.getElementById('furkation_3_47_b').style.display = 'block';
        }
        if (Furkation_47_b == 1) {
            document.getElementById('furkation_1_47_b_tab').style.display = 'block';
        } else if (Furkation_47_b == 2) {
            document.getElementById('furkation_2_47_b_tab').style.display = 'block';
        } else if (Furkation_47_b == 3) {
            document.getElementById('furkation_3_47_b_tab').style.display = 'block';
        }
        if (Furkation_47_l == 1) {
            document.getElementById('furkation_1_47_l').style.display = 'block';
        } else if (Furkation_47_l == 2) {
            document.getElementById('furkation_2_47_l').style.display = 'block';
        } else if (Furkation_47_l == 3) {
            document.getElementById('furkation_3_47_l').style.display = 'block';
        }
        if (Furkation_47_l == 1) {
            document.getElementById('furkation_1_47_l_tab').style.display = 'block';
        } else if (Furkation_47_l == 2) {
            document.getElementById('furkation_2_47_l_tab').style.display = 'block';
        } else if (Furkation_47_l == 3) {
            document.getElementById('furkation_3_47_l_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_47_b() {
    if (Furkation_47_b == 0) {
        document.getElementById('furkation_1_47_b_tab').style.display = 'block';
        document.getElementById('furkation_2_47_b_tab').style.display = 'none';
        document.getElementById('furkation_3_47_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_b').style.display = 'block';
        document.getElementById('furkation_2_47_b').style.display = 'none';
        document.getElementById('furkation_3_47_b').style.display = 'none';

        Furkation_47_b = 1;
    }
    else if (Furkation_47_b == 1) {
        document.getElementById('furkation_1_47_b_tab').style.display = 'none';
        document.getElementById('furkation_2_47_b_tab').style.display = 'block';
        document.getElementById('furkation_3_47_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_b').style.display = 'none';
        document.getElementById('furkation_2_47_b').style.display = 'block';
        document.getElementById('furkation_3_47_b').style.display = 'none';
        
        Furkation_47_b = 2;
    }
    else if (Furkation_47_b == 2) {
        document.getElementById('furkation_1_47_b_tab').style.display = 'none';
        document.getElementById('furkation_2_47_b_tab').style.display = 'none';
        document.getElementById('furkation_3_47_b_tab').style.display = 'block';
        
        document.getElementById('furkation_1_47_b').style.display = 'none';
        document.getElementById('furkation_2_47_b').style.display = 'none';
        document.getElementById('furkation_3_47_b').style.display = 'block';
                    
        Furkation_47_b = 3;
    }
    else if (Furkation_47_b == 3) {
        document.getElementById('furkation_1_47_b_tab').style.display = 'none';
        document.getElementById('furkation_2_47_b_tab').style.display = 'none';
        document.getElementById('furkation_3_47_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_b').style.display = 'none';
        document.getElementById('furkation_2_47_b').style.display = 'none';
        document.getElementById('furkation_3_47_b').style.display = 'none';
                    
        Furkation_47_b = 0;
    }
}

function toggle_furcation_47_l() {
    if (Furkation_47_l == 0) {
        document.getElementById('furkation_1_47_l_tab').style.display = 'block';
        document.getElementById('furkation_2_47_l_tab').style.display = 'none';
        document.getElementById('furkation_3_47_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_l').style.display = 'block';
        document.getElementById('furkation_2_47_l').style.display = 'none';
        document.getElementById('furkation_3_47_l').style.display = 'none';

        Furkation_47_l = 1;
    }
    else if (Furkation_47_l == 1) {
        document.getElementById('furkation_1_47_l_tab').style.display = 'none';
        document.getElementById('furkation_2_47_l_tab').style.display = 'block';
        document.getElementById('furkation_3_47_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_l').style.display = 'none';
        document.getElementById('furkation_2_47_l').style.display = 'block';
        document.getElementById('furkation_3_47_l').style.display = 'none';
        
        Furkation_47_l = 2;
    }
    else if (Furkation_47_l == 2) {
        document.getElementById('furkation_1_47_l_tab').style.display = 'none';
        document.getElementById('furkation_2_47_l_tab').style.display = 'none';
        document.getElementById('furkation_3_47_l_tab').style.display = 'block';
        
        document.getElementById('furkation_1_47_l').style.display = 'none';
        document.getElementById('furkation_2_47_l').style.display = 'none';
        document.getElementById('furkation_3_47_l').style.display = 'block';
                    
        Furkation_47_l = 3;
    }
    else if (Furkation_47_l == 3) {
        document.getElementById('furkation_1_47_l_tab').style.display = 'none';
        document.getElementById('furkation_2_47_l_tab').style.display = 'none';
        document.getElementById('furkation_3_47_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_47_l').style.display = 'none';
        document.getElementById('furkation_2_47_l').style.display = 'none';
        document.getElementById('furkation_3_47_l').style.display = 'none';
                    
        Furkation_47_l = 0;
    }
}

function toggle_BOP_47_db() {
    if (BOP_47_db == 0) {
        BOP_47_db = 1;
        document.getElementById('BOP_47_db_rectangle').style.display = 'block';
    }
    else {
        BOP_47_db = 0;
        document.getElementById('BOP_47_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_47_b() {
    if (BOP_47_b == 0) {
        BOP_47_b = 1;
        document.getElementById('BOP_47_b_rectangle').style.display = 'block';
    }
    else {
        BOP_47_b = 0;
        document.getElementById('BOP_47_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_47_mb() {
    if (BOP_47_mb == 0) {
        BOP_47_mb = 1;
        document.getElementById('BOP_47_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_47_mb = 0;
        document.getElementById('BOP_47_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_47_db() {
    if (PI_47_db == 0) {
        PI_47_db = 1;
        document.getElementById('PI_47_db_rectangle').style.display = 'block';
    }
    else {
        PI_47_db = 0;
        document.getElementById('PI_47_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_47_b() {
    if (PI_47_b == 0) {
        PI_47_b = 1;
        document.getElementById('PI_47_b_rectangle').style.display = 'block';
    }
    else {
        PI_47_b = 0;
        document.getElementById('PI_47_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_47_mb() {
    if (PI_47_mb == 0) {
        PI_47_mb = 1;
        document.getElementById('PI_47_mb_rectangle').style.display = 'block';
    }
    else {
        PI_47_mb = 0;
        document.getElementById('PI_47_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_47_dl() {
    if (BOP_47_dl == 0) {
        BOP_47_dl = 1;
        document.getElementById('BOP_47_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_47_dl = 0;
        document.getElementById('BOP_47_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_47_l() {
    if (BOP_47_l == 0) {
        BOP_47_l = 1;
        document.getElementById('BOP_47_l_rectangle').style.display = 'block';
    }
    else {
        BOP_47_l = 0;
        document.getElementById('BOP_47_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_47_ml() {
    if (BOP_47_ml == 0) {
        BOP_47_ml = 1;
        document.getElementById('BOP_47_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_47_ml = 0;
        document.getElementById('BOP_47_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_47_dl() {
    if (PI_47_dl == 0) {
        PI_47_dl = 1;
        document.getElementById('PI_47_dl_rectangle').style.display = 'block';
    }
    else {
        PI_47_dl = 0;
        document.getElementById('PI_47_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_47_l() {
    if (PI_47_l == 0) {
        PI_47_l = 1;
        document.getElementById('PI_47_l_rectangle').style.display = 'block';
    }
    else {
        PI_47_l = 0;
        document.getElementById('PI_47_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_47_ml() {
    if (PI_47_ml == 0) {
        PI_47_ml = 1;
        document.getElementById('PI_47_ml_rectangle').style.display = 'block';
    }
    else {
        PI_47_ml = 0;
        document.getElementById('PI_47_ml_rectangle').style.display = 'none';
    }
}

function change_probing_47() {
    if (Tooth_47 == 1) {
        
    // Variablen aus dem Formular
        st_47_db = document.forms[0]["st_47_db"].value;
        st_47_b = document.forms[0]["st_47_b"].value;
        st_47_mb = document.forms[0]["st_47_mb"].value;

        if (document.forms[0]["st_47_dl"].value > 3) {document.forms[0]["st_47_dl"].style.color = 'red';} else {document.forms[0]["st_47_dl"].style.color = 'black'};
        if (document.forms[0]["st_47_l"].value > 3) {document.forms[0]["st_47_l"].style.color = 'red';} else {document.forms[0]["st_47_l"].style.color = 'black'};
        if (document.forms[0]["st_47_ml"].value > 3) {document.forms[0]["st_47_ml"].style.color = 'red';} else {document.forms[0]["st_47_ml"].style.color = 'black'};
        
        mg_47_db = document.forms[0]["mg_47_db"].value;
        mg_47_b = document.forms[0]["mg_47_b"].value;
        mg_47_mb = document.forms[0]["mg_47_mb"].value;
        
        st_47_dl = document.forms[0]["st_47_dl"].value;
        st_47_l = document.forms[0]["st_47_l"].value;
        st_47_ml = document.forms[0]["st_47_ml"].value;

        if (document.forms[0]["st_47_db"].value > 3) {document.forms[0]["st_47_db"].style.color = 'red';} else {document.forms[0]["st_47_db"].style.color = 'black'};
        if (document.forms[0]["st_47_b"].value > 3) {document.forms[0]["st_47_b"].style.color = 'red';} else {document.forms[0]["st_47_b"].style.color = 'black'};
        if (document.forms[0]["st_47_mb"].value > 3) {document.forms[0]["st_47_mb"].style.color = 'red';} else {document.forms[0]["st_47_mb"].style.color = 'black'};
        
        mg_47_dl = document.forms[0]["mg_47_dl"].value;
        mg_47_l = document.forms[0]["mg_47_l"].value;
        mg_47_ml = document.forms[0]["mg_47_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
        var x_db_47 = 358;							// distal 47
        var x_mb_47 = 406;							// mesial 47
        var x_b_47 = (x_db_47 + x_mb_47)/2;			// bukkal 47
        
    // Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
        var x_dl_47 = 362;							// distal 47
        var x_ml_47 = 410;							// mesial 47
        var x_l_47 = (x_dl_47 + x_ml_47)/2;			// lingual 47
        
    // Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
        var y_mg_47_db = mg_UK_b - 6.05 * mg_47_db;	// Margo Gingivae distobukkal 47
        var y_mg_47_b = mg_UK_b - 6.05 * mg_47_b;	// Margo Gingivae bukkal 47
        var y_mg_47_mb = mg_UK_b - 6.05 * mg_47_mb;	// Margo Gingivae mesiobukkal 47
        var y_st_47_db = 6.05 * st_47_db;			// Sondierungstiefe distobukkal 47
        var y_st_47_b = 6.05 * st_47_b;				// Sondierungstiefe bukkal 47
        var y_st_47_mb = 6.05 * st_47_mb;			// Sondierungstiefe mesiobukkal 47
        
    // Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
        var y_mg_47_dl = mg_UK_l + 6.05 * mg_47_dl;	// Margo Gingivae distolingual 47
        var y_mg_47_l = mg_UK_l + 6.05 * mg_47_l;	// Margo Gingivae lingual 47
        var y_mg_47_ml = mg_UK_l + 6.05 * mg_47_ml;	// Margo Gingivae mesiolingual 47
        var y_st_47_dl = 6.05 * st_47_dl;			// Sondierungstiefe distolingual 47
        var y_st_47_l = 6.05 * st_47_l;				// Sondierungstiefe lingual 47
        var y_st_47_ml = 6.05 * st_47_ml;			// Sondierungstiefe mesiolingual 47
        
    // Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_47_db = y_mg_47_db + y_st_47_db;	// Attachmentniveau distobukkal 47
        var y_an_47_b = y_mg_47_b + y_st_47_b;		// Attachmentniveau bukkal 47
        var y_an_47_mb = y_mg_47_mb + y_st_47_mb;	// Attachmentniveau mesiobukkal 47
        
    // Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_47_dl = y_mg_47_dl - y_st_47_dl;	// Attachmentniveau distolingual 47
        var y_an_47_l = y_mg_47_l - y_st_47_l;		// Attachmentniveau lingual 47
        var y_an_47_ml = y_mg_47_ml - y_st_47_ml;	// Attachmentniveau mesiolingual 47
        
    // Parodontaltasche 47 bukkal zeichnen
        var string = 
            x_db_47 + ", " + y_an_47_db + "  " + 
            x_b_47 + ", " + y_an_47_b + "  " + 
            x_mb_47 + ", " + y_an_47_mb + "  " + 
            x_mb_47 + ", " + y_mg_47_mb + "  " + 
            x_b_47 + ", " + y_mg_47_b + "  " + 
            x_db_47 + ", " + y_mg_47_db;
        document.getElementById("polygon_47_b").setAttribute("points", string);
    // Attachmentniveau 47 bukkal zeichnen
        var string = 
            x_db_47 + ", " + y_an_47_db + "  " + 
            x_b_47 + ", " + y_an_47_b + "  " + 
            x_mb_47 + ", " + y_an_47_mb;
        document.getElementById("polyline_an_47_b").setAttribute("points", string);
    // Margo Gingivae 47 bukkal zeichnen
        var string =
            x_db_47 + ", " + y_mg_47_db + "  " + 
            x_b_47 + ", " + y_mg_47_b + "  " + 
            x_mb_47 + ", " + y_mg_47_mb;
        document.getElementById("polyline_mg_47_b").setAttribute("points", string);

    // Parodontaltasche 47 lingual zeichnen
        var string = 
            x_dl_47 + ", " + y_an_47_dl + "  " + 
            x_l_47 + ", " + y_an_47_l + "  " + 
            x_ml_47 + ", " + y_an_47_ml + "  " + 
            x_ml_47 + ", " + y_mg_47_ml + "  " + 
            x_l_47 + ", " + y_mg_47_l + "  " + 
            x_dl_47 + ", " + y_mg_47_dl;
        document.getElementById("polygon_47_l").setAttribute("points", string);
    // Attachmentniveau 47 lingual zeichnen
        var string = 
            x_dl_47 + ", " + y_an_47_dl + "  " + 
            x_l_47 + ", " + y_an_47_l + "  " + 
            x_ml_47 + ", " + y_an_47_ml;
        document.getElementById("polyline_an_47_l").setAttribute("points", string);
    // Margo Gingivae 47 lingual zeichnen
        var string =
            x_dl_47 + ", " + y_mg_47_dl + "  " + 
            x_l_47 + ", " + y_mg_47_l + "  " + 
            x_ml_47 + ", " + y_mg_47_ml;
        document.getElementById("polyline_mg_47_l").setAttribute("points", string);
    }
    if (Tooth_47 == 1 && Tooth_46 == 1) {

        st_46_db = document.forms[0]["st_46_db"].value;
        mg_46_db = document.forms[0]["mg_46_db"].value;
        
        st_46_dl = document.forms[0]["st_46_dl"].value;
        mg_46_dl = document.forms[0]["mg_46_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 46 (bukkal) in der Bitmap
        var x_db_46 = 422;							// distal 46
        
    // Set der horizontalen Koordinaten von Zahn 46 (lingual) in der Bitmap
        var x_dl_46 = 425;							// distal 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (bukkal) aus dem Formular
        var y_mg_46_db = mg_UK_b - 6.05 * mg_46_db;	// Margo Gingivae distobukkal 46
        var y_st_46_db = 6.05 * st_46_db;			// Sondierungstiefe distobukkal 46
        
    // Set der vertikalen Koordinaten von Zahn 46 (lingual) aus dem Formular
        var y_mg_46_dl = mg_UK_l + 6.05 * mg_46_dl;	// Margo Gingivae distolingual 46
        var y_st_46_dl = 6.05 * st_46_dl;			// Sondierungstiefe distolingual 46
        
    // Berechnung des Attachmentniveaus 46 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_46_db = y_mg_46_db + y_st_46_db;	// Attachmentniveau distobukkal 46
        
    // Berechnung des Attachmentniveaus 46 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_46_dl = y_mg_46_dl - y_st_46_dl;	// Attachmentniveau distolingual 46

    // Parodontaltasche inter_47_46 bukkal zeichnen
        var string = 
            x_mb_47 + ", " + y_an_47_mb + "  " + 
            x_db_46 + ", " + y_an_46_db + "  " + 
            x_db_46 + ", " + y_mg_46_db + "  " + 
            x_mb_47 + ", " + y_mg_47_mb;
        document.getElementById("polygon_inter_47_46_b").setAttribute("points", string);
    // Attachmentniveau inter_47_46 bukkal zeichnen
        var string = 
            x_mb_47 + ", " + y_an_47_mb + "  " + 
            x_db_46 + ", " + y_an_46_db;
        document.getElementById("polyline_an_inter_47_46_b").setAttribute("points", string);
    // Margo Gingivae inter_47_46 bukkal zeichnen
        var string =
            x_mb_47 + ", " + y_mg_47_mb + "  " + 
            x_db_46 + ", " + y_mg_46_db;
        document.getElementById("polyline_mg_inter_47_46_b").setAttribute("points", string);

    // Parodontaltasche inter_47_46 lingual zeichnen
        var string = 
            x_ml_47 + ", " + y_an_47_ml + "  " + 
            x_dl_46 + ", " + y_an_46_dl + "  " + 
            x_dl_46 + ", " + y_mg_46_dl + "  " + 
            x_ml_47 + ", " + y_mg_47_ml;
        document.getElementById("polygon_inter_47_46_l").setAttribute("points", string);
    // Attachmentniveau inter_47_46 lingual zeichnen
        var string = 
            x_ml_47 + ", " + y_an_47_ml + "  " + 
            x_dl_46 + ", " + y_an_46_dl;
        document.getElementById("polyline_an_inter_47_46_l").setAttribute("points", string);
    // Margo Gingivae inter_47_46 lingual zeichnen
        var string =
            x_ml_47 + ", " + y_mg_47_ml + "  " + 
            x_dl_46 + ", " + y_mg_46_dl;
        document.getElementById("polyline_mg_inter_47_46_l").setAttribute("points", string);
    }
    if (Tooth_48 == 1 && Tooth_47 == 1) {

        st_48_mb = document.forms[0]["st_48_mb"].value;
        mg_48_mb = document.forms[0]["mg_48_mb"].value;
        
        st_48_ml = document.forms[0]["st_48_ml"].value;
        mg_48_ml = document.forms[0]["mg_48_ml"].value;
        
    // Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
        var x_mb_48 = 342;							// mesial 48
        
    // Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
        var x_ml_48 = 346;							// mesial 48
        
    // Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
        var y_mg_48_mb = mg_UK_b - 6.05 * mg_48_mb;	// Margo Gingivae mesiobukkal 48
        var y_st_48_mb = 6.05 * st_48_mb;			// Sondierungstiefe mesiobukkal 48
        
    // Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
        var y_mg_48_ml = mg_UK_l + 6.05 * mg_48_ml;	// Margo Gingivae mesiolingual 48
        var y_st_48_ml = 6.05 * st_48_ml;			// Sondierungstiefe mesiolingual 48
        
    // Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_48_mb = y_mg_48_mb + y_st_48_mb;	// Attachmentniveau mesiobukkal 48
        
    // Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_48_ml = y_mg_48_ml - y_st_48_ml;	// Attachmentniveau mesiolingual 48

    // Parodontaltasche inter_48_47 bukkal zeichnen
        var string = 
            x_mb_48 + ", " + y_an_48_mb + "  " + 
            x_db_47 + ", " + y_an_47_db + "  " + 
            x_db_47 + ", " + y_mg_47_db + "  " + 
            x_mb_48 + ", " + y_mg_48_mb;
        document.getElementById("polygon_inter_48_47_b").setAttribute("points", string);
    // Attachmentniveau inter_48_47 bukkal zeichnen
        var string = 
            x_mb_48 + ", " + y_an_48_mb + "  " + 
            x_db_47 + ", " + y_an_47_db;
        document.getElementById("polyline_an_inter_48_47_b").setAttribute("points", string);
    // Margo Gingivae inter_48_47 bukkal zeichnen
        var string =
            x_mb_48 + ", " + y_mg_48_mb + "  " + 
            x_db_47 + ", " + y_mg_47_db;
        document.getElementById("polyline_mg_inter_48_47_b").setAttribute("points", string);

    // Parodontaltasche inter_48_47 lingual zeichnen
        var string = 
            x_ml_48 + ", " + y_an_48_ml + "  " + 
            x_dl_47 + ", " + y_an_47_dl + "  " + 
            x_dl_47 + ", " + y_mg_47_dl + "  " + 
            x_ml_48 + ", " + y_mg_48_ml;
        document.getElementById("polygon_inter_48_47_l").setAttribute("points", string);
    // Attachmentniveau inter_48_47 lingual zeichnen
        var string = 
            x_ml_48 + ", " + y_an_48_ml + "  " + 
            x_dl_47 + ", " + y_an_47_dl;
        document.getElementById("polyline_an_inter_48_47_l").setAttribute("points", string);
    // Margo Gingivae inter_48_47 lingual zeichnen
        var string =
            x_ml_48 + ", " + y_mg_48_ml + "  " + 
            x_dl_47 + ", " + y_mg_47_dl;
        document.getElementById("polyline_mg_inter_48_47_l").setAttribute("points", string);
    }
}