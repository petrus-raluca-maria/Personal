package DCS_FuzzyLab.Comparator;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;

public class ComparatorInput {
	public static void main(String[] args) throws InterruptedException, IOException {

		File file = new File("E:\\uni\\an4\\sem1\\DCS_lab\\Lab4\\PetriInputData\\comparator.txt");
		Files.deleteIfExists(file.toPath());
		FileWriter fw = new FileWriter(file.getPath());
		double f1, f2;
		for (float i = 0; i < 720; i++) {
/*if (i % 10 < 5) {
f1 = i/100;
f2 = i/-100;
} else {
f1 = i/-100;
f2 = i/100;
}*/
			f1 = Math.sin(Math.toRadians(i));
			f2 = Math.cos(Math.toRadians(i));
			fw.write("P0:"+f1+"F"+","+"P1:"+f2+"F\n");
		}

		fw.close();

		System.out.println("Done!");
	}
}