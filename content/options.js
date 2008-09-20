var Cc = Components.classes;
var Ci = Components.interfaces;

function nicomonkeySwitch()
{
	checked = document.getElementById('nicomonkey.enable').checked;
	if (!checked)
	{
		document.getElementById('nicomonkey.toolbar').disabled = false;
		document.getElementById('nicomonkey.player_killer').disabled = false;
	}
	else
	{
		document.getElementById('nicomonkey.toolbar').disabled = true;
		document.getElementById('nicomonkey.player_killer').disabled = true;
	}
}
function updatePanel1()
{
	checked = document.getElementById('nicomonkey.enable').checked;
	if (checked)
	{
		document.getElementById('nicomonkey.toolbar').disabled = false;
		document.getElementById('nicomonkey.player_killer').disabled = false;
	}
	else
	{
		document.getElementById('nicomonkey.toolbar').disabled = true;
		document.getElementById('nicomonkey.player_killer').disabled = true;
	}
}
function updatePanel2()
{
	var save_path = document.getElementById("pref-save_path").value;
	if (save_path)
	{
		var save_path_element = document.getElementById("save_path");
		save_path_element.file = save_path;
		save_path_element.label = save_path.path;
	}


}
function selectDir(title)
{
	var file_picker = Cc["@mozilla.org/filepicker;1"]
	                  .createInstance(Ci.nsIFilePicker);
	file_picker.init(window, document.getElementById('nicofox-strings').getString('chooseFolder'), Ci.nsIFilePicker.modeGetFolder);
	if (file_picker.show() == Ci.nsIFilePicker.returnOK)
	{
		document.getElementById("pref-save_path").value = file_picker.file;
	updatePanel2();
	}
}

