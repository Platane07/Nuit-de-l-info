<!DOCTYPE html>
<meta charset="UTF-8">
<html lang="fr"> 
<html>

	<head>

		<title> Test </title>
	
	</head>
		<?php
			try
			{
			    $bdd = new PDO('mysql:host=localhost;dbname=bdd_forum', 'root', 'root');
			     
			     
			    // On recupere tout le contenu de la table Client
			$reponse = $bdd->query('SELECT titre,epingle FROM topic WHERE epingle=1');
			  
			// On affiche le resultat
			while ($donnees = $reponse->fetch())
			{
			    echo "Epinglé : ";
			    echo "<a href=http://localhost/$donnees[titre]/>$donnees[titre]</a><br>";
			}
			$reponse = $bdd->query('SELECT titre,id_topic,epingle FROM topic ORDER BY date_last LIMIT 5');
			while ($donnees = $reponse->fetch())
			{
			    echo "<a href=http://localhost/ouvertureTopic.php?topic=$donnees[id_topic]/>$donnees[titre]</a><br>";
			}
			$reponse->closeCursor();
			}
			catch(Exception $e)
			{
			    die('Erreur : '.$e->getMessage());
			}
		?>
	<body>
		<br>
		<h3>Nouveau topic :</h3>
		
		<form method="POST" action="forumindex.php">
			Titre topic : <input name="titre" type="text"><br>
			Message : <input name ="message" type="text" style="width:500px; height: 250px;"><br>
			<input type="submit" value="Poster">
			<input type="button" value="Actualiser" OnClick="javascript:window.location.reload()">
		</form>

	</body>
</html>