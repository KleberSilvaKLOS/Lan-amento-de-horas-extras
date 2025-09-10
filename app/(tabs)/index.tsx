import React, { useState } from "react";
import { Button, FlatList, ScrollView, Text, TextInput, View } from "react-native";

export default function App() {
  const [data, setData] = useState("");
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [descricao, setDescricao] = useState("");
  const [horasExtras, setHorasExtras] = useState([]);
  const [inicioFiltro, setInicioFiltro] = useState("");
  const [fimFiltro, setFimFiltro] = useState("");
  const [textoExportado, setTextoExportado] = useState("");

  // Função para formatar data como dd/mm/aa
  const formatarData = (text: string) => {
    const numeros = text.replace(/\D/g, "").slice(0,6); // pegar apenas números, máximo 6 dígitos
    let formatted = numeros;
    if (numeros.length >= 3 && numeros.length <= 4) {
      formatted = numeros.slice(0,2) + "/" + numeros.slice(2);
    } else if (numeros.length >= 5) {
      formatted = numeros.slice(0,2) + "/" + numeros.slice(2,4) + "/" + numeros.slice(4);
    }
    setData(formatted);
  };

  // Função para formatar hora como HH:MM
  function formatarHora(text: string, setHora: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }): void {
    const numeros = text.replace(/\D/g, "").slice(0, 4); // máximo 4 dígitos
    let formatted = numeros;
    if (numeros.length >= 3) {
      formatted = numeros.slice(0, 2) + ":" + numeros.slice(2);
    }
    setHora(formatted);
  }

  const adicionarHoraExtra = () => {
    if (data && inicio && fim) {
      const nova = { id: Date.now().toString(), data, inicio, fim, descricao };
      setHorasExtras([...horasExtras, nova]);
      setData("");
      setInicio("");
      setFim("");
      setDescricao("");
    }
  };

  const exportarTexto = () => {
  if (!inicioFiltro || !fimFiltro) return;

  // Converter dd/mm/aa para Date
  const [di, mi, ai] = inicioFiltro.split("/").map(Number);
  const [df, mf, af] = fimFiltro.split("/").map(Number);

  const inicioDate = new Date(2000 + ai, mi - 1, di); // ano completo
  const fimDate = new Date(2000 + af, mf - 1, df);

  const filtradas = horasExtras.filter((item) => {
    const [d, m, a] = item.data.split("/").map(Number);
    const itemDate = new Date(2000 + a, m - 1, d);
    return itemDate >= inicioDate && itemDate <= fimDate;
  });

  let texto = `Horas Extras – Período ${inicioFiltro} a ${fimFiltro}\n\n`;
  filtradas.forEach((h) => {
    texto += `Data: ${h.data}\nHora Extra: ${h.inicio} - ${h.fim}\nDescrição: ${h.descricao}\n\n`;
  });

  setTextoExportado(texto);
};

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Lançar Hora Extra</Text>

      <TextInput
        placeholder="Data (dd/mm/aa)"
        value={data}
        onChangeText={formatarData}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Hora início (HH:MM)"
        value={inicio}
        onChangeText={(t) => formatarHora(t, setInicio)}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Hora fim (HH:MM)"
        value={fim}
        onChangeText={(t) => formatarHora(t, setFim)}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={{ borderWidth: 1, padding: 8, marginVertical: 5 }}
      />

      <Button title="Adicionar" onPress={adicionarHoraExtra} />

      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Lançamentos</Text>
      <FlatList
        data={horasExtras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 5, borderBottomWidth: 1 }}>
            <Text>{item.data} | {item.inicio} - {item.fim}</Text>
            <Text>{item.descricao}</Text>
          </View>
        )}
      />

      <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold" }}>Exportar</Text>
      <TextInput
        placeholder="Início período (dd/mm/aa)"
        value={inicioFiltro}
        onChangeText={setInicioFiltro}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Fim período (dd/mm/aa)"
        value={fimFiltro}
        onChangeText={setFimFiltro}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginVertical: 5 }}
      />
      <Button title="Exportar" onPress={exportarTexto} />

      {textoExportado ? (
        <View style={{ marginTop: 20, padding: 10, borderWidth: 1 }}>
          <Text selectable>{textoExportado}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}
