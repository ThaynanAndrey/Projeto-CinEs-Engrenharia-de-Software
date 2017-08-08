module cines

---------------------------ASSINATURAS-----------------------------

sig Usuario {
	ingressos: set Ingresso
}

sig Ingresso {
	cadeiraReservada: one Cadeira
}

sig Filme {
	sessoes: set Sessao
}

sig Sessao {
	sala: one Sala,
	cadeiras: set Cadeira
}

sig Sala {
}

sig Cadeira {}

----------------------------PREDICADOS---------------------------

pred sessaoComUnicaSala[s:Sala] {
	one s.~sala
}

pred sessaoComUnicoFilmes[s:Sessao] {
	one s.~sessoes
}

pred ingresoTemUmDono[i:Ingresso] {
	one i.~ingressos
}

pred cadeiraDeUnicaSessao[c:Cadeira] {
	one c.~cadeiras
}

pred cadeiraReservadaAUnicoIngresso[c:Cadeira] {
	lone c.~cadeiraReservada
}

pred quantidadeMaximaSessoesPorFilme[f:Filme] {
	#(f.sessoes) <= 2
}

pred quantidadeMinimaSessoesPorFilme[f:Filme] {
	#(f.sessoes) >= 1
}

pred quantidadeDeCadeirasPorSessao[s:Sessao] {
	#(s.cadeiras) = 84
}
-------------------------------- FATOS -----------------------------

fact invariantes {
	all sala: Sala | sessaoComUnicaSala[sala]
	all sessao: Sessao | sessaoComUnicoFilmes[sessao]
	all ingresso: Ingresso | ingresoTemUmDono[ingresso]
	all cadeira: Cadeira | cadeiraDeUnicaSessao[cadeira]
	all cadeira: Cadeira | cadeiraReservadaAUnicoIngresso[cadeira]
}

fact quantidadeDeInstancias {
	all filme: Filme | quantidadeMaximaSessoesPorFilme[filme] && quantidadeMinimaSessoesPorFilme[filme]
	all sessao: Sessao | quantidadeDeCadeirasPorSessao[sessao]
}

pred main [] {}

run main for 84
