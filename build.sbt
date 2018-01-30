name := "auctions"
 
version := "1.0" 
      
lazy val `auctions` = (project in file(".")).enablePlugins(PlayJava)

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"
      
scalaVersion := "2.11.11"

libraryDependencies ++= Seq( javaJdbc , cache , javaWs ,
  "org.postgresql" % "postgresql" % "42.1.4")

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

      