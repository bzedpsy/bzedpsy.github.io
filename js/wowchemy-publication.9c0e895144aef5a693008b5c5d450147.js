var a={},s,r,l=$("#container-publications");if(l.length){l.isotope({itemSelector:".isotope-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:function(){let t=$(this),e=s?t.text().match(s):!0,o=r?t.is(r):!0;return e&&o}});let i=$(".filter-search").keyup(p(function(){s=new RegExp(i.val(),"gi"),l.isotope()}));$(".pub-filters").on("change",function(){let e=$(this)[0].getAttribute("data-filter-group");if(a[e]=this.value,r=f(a),l.isotope(),e==="pubtype"){let o=$(this).val();o.substr(0,9)===".pubtype-"?window.location.hash=o.substr(9):window.location.hash=""}})}function p(i,t){let e;return t=t||100,function(){clearTimeout(e);let u=arguments,n=this;function c(){i.apply(n,u)}e=setTimeout(c,t)}}function f(i){let t="";for(let e in i)t+=i[e];return t}function d(){if(!l.length)return;let i=window.location.hash.replace("#",""),t="*";i!=""&&(t=".pubtype-"+i);let e="pubtype";a[e]=t,r=f(a),l.isotope(),$(".pubtype-select").val(t)}document.addEventListener("DOMContentLoaded",function(){$(".pub-filters-select")&&d(),$(".js-cite-modal").click(function(i){i.preventDefault();let t=$(this).attr("data-filename"),e=$("#modal");e.find(".modal-body code").load(t,function(o,u,n){u=="error"?$("#modal-error").html("Error: "+n.status+" "+n.statusText):$(".js-download-cite").attr("href",t)}),e.modal("show")}),$(".js-copy-cite").click(function(i){i.preventDefault();let t=document.querySelector("#modal .modal-body code").innerHTML;navigator.clipboard.writeText(t).then(function(){console.debug("Citation copied!")}).catch(function(){console.error("Citation copy failed!")})})});
(function(){
  function publicationItem(authors,year,title,journal,doi,cite,grid){
    var inner='<div class="pub-list-item view-citation" style="margin-bottom: 1rem"><i class="far fa-file-alt pub-icon" aria-hidden="true"></i><span class="article-metadata li-cite-author">'+authors+'</span> ('+year+'). <a href="https://doi.org/'+doi+'" target="_blank" rel="noopener">'+title+'</a>. '+journal+'<p><a href="#" class="btn btn-outline-primary btn-page-header btn-sm js-cite-modal" data-filename="'+cite+'">Cite</a> <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://doi.org/'+doi+'" target="_blank" rel="noopener">DOI</a></p></div>';
    return grid?'<div class="grid-sizer col-lg-12 isotope-item pubtype-journal-article year-'+year+'">'+inner+'</div>':inner;
  }
  function patchTeaching(){
    var sec=document.querySelector('#teaching'); if(!sec)return;
    sec.querySelectorAll('.card-text li').forEach(function(li){li.textContent=li.textContent.replace(/\s*\(Graduate level\)/gi,'');});
    var ul=sec.querySelector('.card-text ul'); if(!ul)return;
    if(!ul.textContent.includes('EPSY 84500')){var a=document.createElement('li');a.textContent='EPSY 84500 Research Synthesis and Meta-Analysis';ul.appendChild(a);}
    if(!ul.textContent.includes('EPSY 84200')){var b=document.createElement('li');b.textContent='EPSY 84200 Hierarchical Linear Model';ul.appendChild(b);}
  }
  function patchHomePublications(){
    var sec=Array.from(document.querySelectorAll('section')).find(function(x){var h=x.querySelector('.section-heading h1');return h&&h.textContent.trim()==='Recent Publications';});
    if(!sec)return;
    var box=sec.querySelector('.col-12.col-lg-8'); if(!box)return;
    box.querySelectorAll('.pub-list-item.view-citation').forEach(function(x){x.remove();});
    var see=box.querySelector('.see-all'); if(!see)return;
    var html='';
    html+=publicationItem('<span>FL Huang</span>, <span>B Zhang</span>','2026','Accounting for Random Slopes Using Cluster-Robust Standard Errors in Multilevel Models','<em>The Journal of Experimental Education, 94</em>(4), 1131-1150.','10.1080/00220973.2025.2565180','/publication/huang-zhang-2026-random-slopes/cite.bib',false);
    html+=publicationItem('<span>B Zhang</span>, <span>W Wiedermann</span>, <span>T Shen</span>','2026','Causal Inference-Based Covariate Selection for Binary Variables via the Linear Probability Model','<em>The Journal of Experimental Education, 94</em>(4), 1165-1190.','10.1080/00220973.2025.2599811','/publication/zhang-et-al-2026-binary-covariate-selection/cite.bib',false);
    html+=publicationItem('<span>WM Wong</span>, <span>B Zhang</span>, <span>D Foley</span>, <span>V Nikulina</span>','2025','Childhood Maltreatment Impacts Cognitive Function in Emerging Adulthood: A Systematic Review and Meta-Analysis','<em>Psychological Reports</em>.','10.1177/00332941251411294','/publication/wong-et-al-2025/cite.bib',false);
    html+=publicationItem('<span>B Zhang</span>, <span>S Konstantopoulos</span>','2025','Short- and long-term effects of approaches to learning on reading and mathematics achievement in childhood: a fixed effects approach','<em>Educational Evaluation and Research</em>.','10.1080/13803611.2024.2441785','/publication/zhang-konstantopoulos-2025/cite.bib',false);
    html+=publicationItem('<span>W Wiedermann</span>, <span>B Zhang</span>','2024','Direction of dependence in non-linear models via linearization','<em>In Stemmler, M., Wiedermann, W., &amp; Huang, F. (eds.), Dependent data in social sciences research: Forms, issues, and methods of analysis (2nd ed.), Springer</em>.','10.1007/978-3-031-56318-8_9','/publication/ww-zhang-2024/cite.bib',false);
    see.insertAdjacentHTML('beforebegin',html);
  }
  function patchPublicationPage(){
    var grid=document.querySelector('#container-publications'); if(!grid)return;
    if(!document.querySelector('.year-2026')){
      var first=grid.firstElementChild;
      var html='';
      html+=publicationItem('<span>FL Huang</span>, <span>B Zhang</span>','2026','Accounting for Random Slopes Using Cluster-Robust Standard Errors in Multilevel Models','<em>The Journal of Experimental Education, 94</em>(4), 1131-1150.','10.1080/00220973.2025.2565180','/publication/huang-zhang-2026-random-slopes/cite.bib',true);
      html+=publicationItem('<span>B Zhang</span>, <span>W Wiedermann</span>, <span>T Shen</span>','2026','Causal Inference-Based Covariate Selection for Binary Variables via the Linear Probability Model','<em>The Journal of Experimental Education, 94</em>(4), 1165-1190.','10.1080/00220973.2025.2599811','/publication/zhang-et-al-2026-binary-covariate-selection/cite.bib',true);
      html+=publicationItem('<span>WM Wong</span>, <span>B Zhang</span>, <span>D Foley</span>, <span>V Nikulina</span>','2025','Childhood Maltreatment Impacts Cognitive Function in Emerging Adulthood: A Systematic Review and Meta-Analysis','<em>Psychological Reports</em>.','10.1177/00332941251411294','/publication/wong-et-al-2025/cite.bib',true);
      first.insertAdjacentHTML('beforebegin',html);
      var yearSelect=document.querySelector('select[data-filter-group="year"]');
      if(yearSelect&&!yearSelect.querySelector('option[value=".year-2026"]')){var o=document.createElement('option');o.value='.year-2026';o.textContent='2026';yearSelect.insertBefore(o,yearSelect.options[1]||null);}
      if(window.jQuery&&jQuery.fn&&jQuery.fn.isotope){jQuery(grid).isotope('reloadItems').isotope();}
    }
  }
  function apply(){patchTeaching();patchHomePublications();patchPublicationPage();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
})();
