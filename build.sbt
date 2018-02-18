//noinspection Annotator
name := "auctions"

//noinspection Annotator
version := "1.0"
      
lazy val `auctions` = (project in file(".")).enablePlugins(PlayJava)

//noinspection Annotator
resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

//noinspection Annotator
scalaVersion := "2.11.11"

//noinspection Annotator
libraryDependencies ++= Seq( javaJdbc , cache , javaWs ,
  "org.postgresql" % "postgresql" % "42.1.4", javaJpa,
  "org.hibernate" % "hibernate-entitymanager" % "5.2.12.Final",
  "org.mindrot" % "jbcrypt" % "0.3m")

libraryDependencies += evolutions

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

PlayKeys.externalizeResources := false

      