import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;

    public static void main(String[] args) {
        String apiKey = "Licenta";
        String prompt = "Cum funcționează o integrare simplă cu un LLM?";

        try {
            // Configurare conexiune
            URL url = new URL("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");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey);
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            // JSON pentru interogare
            String jsonInput = """
            {
              "model": "gpt-4",
              "messages": [{"role": "user", "content": "%s"}]
            }
            """.formatted(prompt);

            // Trimitere request
            try (OutputStream os = conn.getOutputStream()) {
                os.write(jsonInput.getBytes());
                os.flush();
            }

            // Citire răspuns
            int responseCode = conn.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    response.append(line);
                }
                br.close();

                // Afișare răspuns
                System.out.println("Răspuns API: " + response);
            } else {
                System.out.println("Eroare: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

}

//        import OpenAI from "openai";
//
//        const openai = new OpenAI({
//        apiKey: "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",
//        });
//
//        const completion = openai.chat.completions.create({
//        model: "gpt-4o-mini",
//        store: true,
//        messages: [
//        {"role": "user", "content": "write a haiku about ai"},
//        ],
//        });
//
//        completion.then((result) => console.log(result.choices[0].message));