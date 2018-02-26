const MonsterWeaknesses = {
	"Great Jagras": { Fire: 3, Water: 0, Thunder: 2, Ice: 2, Dragon: 1, Poison: 3, Sleep: 3, Paralysis: 3, Blast: 3, Stun: 3 },
	"Kulu-Ya-Ku": { Fire: 2, Water: 3, Thunder: 2, Ice: 2, Dragon: 2, Poison: 2, Sleep: 2, Paralysis: 2, Blast: 2, Stun: 2 },
	"Pukei-Pukei": { Fire: 2, Water: 0, Thunder: 3, Ice: 2, Dragon: 1, Poison: 1, Sleep: 3, Paralysis: 3, Blast: 2, Stun: 2 },
	"Barroth": { Fire: 3, Water: 0, Thunder: 0, Ice: 2, Dragon: 1, Poison: 3, Sleep: 2, Paralysis: 3, Blast: 3, Stun: 1 },
	"Barroth Mud": { Fire: 0, Water: 3, Thunder: 0, Ice: 2, Dragon: 1, Poison: 3, Sleep: 2, Paralysis: 3, Blast: 3, Stun: 1 },
	"Jyuratodus": { Fire: 1, Water: 0, Thunder: 3, Ice: 1, Dragon: 1, Poison: 2, Sleep: 1, Paralysis: 2, Blast: 1, Stun: 3 },
	"Jyuratodus Mud": { Fire: 0, Water: 3, Thunder: 0, Ice: 1, Dragon: 1, Poison: 2, Sleep: 1, Paralysis: 2, Blast: 1, Stun: 3 },
	"Tobi-Kadachi": { Fire: 2, Water: 3, Thunder: 0, Ice: 2, Dragon: 1, Poison: 3, Sleep: 2, Paralysis: 2, Blast: 2, Stun: 2 },
	"Anjanath": { Fire: 0, Water: 3, Thunder: 2, Ice: 2, Dragon: 2, Poison: 1, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 2 },
	"Rathian": { Fire: 0, Water: 1, Thunder: 2, Ice: 1, Dragon: 3, Poison: 1, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 3 },
	"Tzitzi-Ya-Ku": { Fire: 2, Water: 2, Thunder: 3, Ice: 3, Dragon: 2, Poison: 2, Sleep: 2, Paralysis: 2, Blast: 2, Stun: 2 },
	"Paolumu": { Fire: 3, Water: 0, Thunder: 2, Ice: 1, Dragon: 1, Poison: 2, Sleep: 2, Paralysis: 2, Blast: 3, Stun: 3 },
	"Great Girros": { Fire: 2, Water: 3, Thunder: 0, Ice: 2, Dragon: 1, Poison: 2, Sleep: 3, Paralysis: 1, Blast: 2, Stun: 2 },
	"Radobaan": { Fire: 1, Water: 1, Thunder: 1, Ice: 2, Dragon: 3, Poison: 2, Sleep: 1, Paralysis: 2, Blast: 3, Stun: 2 },
	"Legiana": { Fire: 2, Water: 1, Thunder: 3, Ice: 0, Dragon: 1, Poison: 3, Sleep: 2, Paralysis: 2, Blast: 2, Stun: 2 },
	"Odogaron": { Fire: 1, Water: 1, Thunder: 2, Ice: 3, Dragon: 0, Poison: 1, Sleep: 2, Paralysis: 3, Blast: 2, Stun: 2 },
	"Rathalos": { Fire: 0, Water: 1, Thunder: 2, Ice: 1, Dragon: 3, Poison: 1, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 2 },
	"Diablos": { Fire: 0, Water: 2, Thunder: 1, Ice: 3, Dragon: 2, Poison: 2, Sleep: 2, Paralysis: 3, Blast: 2, Stun: 1 },
	"Kirin": { Fire: 3, Water: 2, Thunder: 0, Ice: 2, Dragon: 1, Poison: 1, Sleep: 2, Paralysis: 0, Blast: 2, Stun: 1 },
	"Zorah Magdaros": { Fire: 0, Water: 3, Thunder: 1, Ice: 2, Dragon: 3, Poison: 0, Sleep: 0, Paralysis: 0, Blast: 0, Stun: 0 },
	"Dodogama": { Fire: 0, Water: 2, Thunder: 3, Ice: 2, Dragon: 1, Poison: 3, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 2 },
	"Pink Rathian": { Fire: 0, Water: 1, Thunder: 2, Ice: 1, Dragon: 3, Poison: 1, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 3 },
	"Bazelgeuse": { Fire: 0, Water: 1, Thunder: 3, Ice: 2, Dragon: 2, Poison: 2, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 1 },
	"Lavasioth": { Fire: 0, Water: 3, Thunder: 2, Ice: 2, Dragon: 1, Poison: 3, Sleep: 1, Paralysis: 2, Blast: 1, Stun: 2 },
	"Lavasioth Hard": { Fire: 1, Water: 2, Thunder: 0, Ice: 0, Dragon: 1, Poison: 3, Sleep: 1, Paralysis: 2, Blast: 1, Stun: 2 },
	"Uragaan": { Fire: 0, Water: 3, Thunder: 1, Ice: 2, Dragon: 2, Poison: 3, Sleep: 1, Paralysis: 2, Blast: 2, Stun: 3 },
	"Azure Rathalos": { Fire: 0, Water: 1, Thunder: 1, Ice: 2, Dragon: 3, Poison: 1, Sleep: 2, Paralysis: 2, Blast: 1, Stun: 2 },
	"Black Diablos": { Fire: 0, Water: 2, Thunder: 1, Ice: 3, Dragon: 0, Poison: 2, Sleep: 2, Paralysis: 3, Blast: 2, Stun: 1 },
	"Nergigante": { Fire: 1, Water: 1, Thunder: 3, Ice: 1, Dragon: 2, Poison: 2, Sleep: 2, Paralysis: 2, Blast: 2, Stun: 2 },
	"Teostra": { Fire: 0, Water: 3, Thunder: 1, Ice: 3, Dragon: 1, Poison: 2, Sleep: 1, Paralysis: 1, Blast: 1, Stun: 2 },
	"Kushala Daora": { Fire: 1, Water: 0, Thunder: 3, Ice: 0, Dragon: 2, Poison: 3, Sleep: 1, Paralysis: 1, Blast: 3, Stun: 2 },
	"Vaal Hazak": { Fire: 3, Water: 0, Thunder: 1, Ice: 2, Dragon: 3, Poison: 1, Sleep: 1, Paralysis: 1, Blast: 2, Stun: 2 },
	"Xeno'jiiva": { Fire: 2, Water: 2, Thunder: 2, Ice: 2, Dragon: 2, Poison: 3, Sleep: 0, Paralysis: 1, Blast: 2, Stun: 1 },
};

export default MonsterWeaknesses;
