class Player {
    constructor(ctx) {
      this.ctx = ctx;
      this.health = 100;
      this.font = `38px "Press Start 2P"`;
      this.textAlign = "center";     
      this.defends = [
        { // 0 TARA
          name: "TARA BARY",
          text: `Where do we come from? In essence, who are you really? Our true identity is covered by thoughts, masks and veils. When we shed these clothes that make up our personality, what is left? Now you can take a deep breath and bring your awareness into your body.

          If you let go of everything anyone has ever told you, can you feel the freedom that remains? Life is magical. You, me, all of us, have been given this precious human life. This very moment is ours to embrace as a divine gift.
          
          Tara's interdisciplinary art project goes back to the essence of being human. We are born in our mother's womb, bathing in her blood. From this dark and mystical void, we emerge. Our mother's warm womb was where our body came into existence. Her vagina was our portal to the world as we now know it.
          
          The female menstrual cycle allows for the growth of new life. Like ancient traditions around the world, Tara considers menstrual blood a sacred fluid. Intimate, natural and raw, it emerges as a gift from nature. During this project, Tara collected all of her menstrual blood. Each cycle, she performed a ritual, painting with her body and her blood.
          
          This project is a co-creation with nature. Art is a way to be in touch with our deepest self. Humans are part of nature and this body is our home.`,
          conjure: `- "I use my art as a conjure to explore the primal essence of human existence and the sacredness of the female body, using menstrual blood as a medium, to inspire deeper self-connection."`
        },
        { // 1 SANDRA
          name: `SANDRA BRAVO`,
          text: `The photo album is a monument of each house. The family is locked inside.

          Historia de un matrimonio is a project focused on the family album, the memory and the narrative of what is hidden in family photographs. From childhood memories to the traumas and lived experiences that form a person's identity, I trace my own family history through archival photographs, mementos and recurring objects.

          The violent and shocking images used for the metaphorical representation of the family journey generate the revelation of an untold truth, with a more realistic perspective than the romanticized vision of the perfect family and their memories.
          
          Historia de un matrimonio is, in the end, the story of a couple who built a family that crumbled over time, and this is reflected in the different pieces that make up the work.
          
          In doing this project, remembering has become a kind of way of telling the truth, not only through the photographs, but also through the sincere message that I have sought to convey with the work: the family is part of yourself whether you like it or not, as well as the memories you create with it, the way you show it is where the truth lies.`,
          conjure: `- "I summon the power of archival photographs, mementos, and recurring objects to create a defensive shield, revealing the hidden truths and illuminating the traumatic experiences that have shaped my identity. I command that my message be heard, that my voice be amplified, and that the light of truth shine on all that was once concealed."`
        },
        { // 2 MARTA
        name: "MARTA POZAS",
        text: `The matrioshka is a set of traditionally Russian dolls that are inserted into each other, one enclosing the other as many times as possible. Malas lenguas is a project that works as a matrioshka. The piece contains the project within the project, it is a compilation that induces the construction of the film itself, it documents and encloses the result itself.

        The work speaks of emptiness, of unacknowledged loss, autonomy, the constant attempt to generate a memory and the family both outwardly and inwardly. The driving subject of the short film is grandmother Juana, a maternal figure of whom there is a lack of knowledge of her life and role in the family. For this reason, the search begins outside the home and not inside.
        
        Older women were contacted through posters in the street trying to answer the question: where are the older women, generating an assimilation in turn in relation to where is Juana?
        
        The limits between the personal and the collective are diluted, and it is played on the line of opposite poles that are mixed: All women could be the grandmother.`,
        conjure: `- "By the power of the Matrioshka, I conjure protection, like the dolls within dolls, enclose and safeguard us from harm. All women may be the grandmother, and may they shield us in their strength and wisdom."`        
        },
        { // 3 ALEJANDRO
        name: "ALEJANDRO CANTALEJO MATA",
        text: `I propose an ironic deconstruction of Genesis with humorous and science fiction resources. A character who presents himself as the devil narrates in first person some events that occurred in the "Garden of Eden" from the birth of Adam until his expulsion. A narrative that unfolds in successive planes of language to allegorize questions about the nature of creation, mythology, knowledge and evil.`,
        conjure: `- "Harken ye, for I bring forth a tale of ironclad satire, of a story so bold and unyielding as to lay bare the very fabric of creation itself. Behold, the story unfolds, a testament to the power of storytelling, and the unending quest for understanding and transcendence."`
        },
        { // 4 JOSE CASAS
        name: "JOSE CASAS",
        text: `My work is influenced on the one hand by childhood and on the other by death. Around this I gather instinctive symbols in the search for a semiconscious image that mediates between the inherited vestige and the influences of a present cultural imaginary, which functions in any case, as a refuge.

        The elements and images are discovered. They appear as findings in terms of a way of doing that supposes wear and tear and loss. In this sense, the pieces are survivors, and in a certain way, they are twinned in a timelessness that the fracture endows them with.
        
        They derive from processes that mediate between intuition and rationality, such as apophenia and the significance of the results. The dialogue with the work is an open code, a hint located in a specific state of mind, but which does not pretend to be resolved.`,
        conjure: `- "I summon forth the influences of my past and present, as I delve into the realm of childhood and death. These two opposing forces guide me as I gather symbols from the depths of my subconscious, searching for an image that bridges the gap between the remnants of my heritage and the cultural influences of the present."`
        },
        { // 5 ADRIAN
        name: "ADRIÁN ESCRIBANO",
        text: `For years I have established a particular relationship with the everyday objects that surround me, which although at the beginning arose without any specific motivation, has been maintained and consolidated throughout this time. Basically, it is about limiting as much as possible, the access to them through random finds in the streets, selected and preserved as my own. The act of incorporating other people's objects in my daily life, creates a way of life closely linked to chance.

        This work continues with this personal dynamic, applied to a methodology of finding and accumulating every element that, presumably, has belonged to a domestic environment and has been discarded. Once all this material has been compiled, the formal and functional similarities that interrelate the different objects begin to become evident, giving rise to a principle of creation by contrast, paradoxically, through exploring the similarities of all that has been accumulated. The result is a series of reconfigurations and compositional exercises of objects engendered among themselves, that is, understanding one in terms of the other, and assembled using, for the most part, only material found in the street.
        
        Without intending to do so, the basis of the project emphasizes relational chance, non-production and organic logic as a way of knowledge. All this, from a marked critical position towards the loss of genuine affective intimacy, by the capitalization apparatus of social relations and the universalization of the concepts of family and childhood. Ultimately, it is a matter of inverting the values of the consumer industry, in order to strain the relationship between the homogeneous appearance of radical domestication and individual expression through the decentralization of needs.`,
        conjure: `- "By the power of the elements, I invoke my connection to the objects that surround me. May they continue to guide my art and aid in my search for understanding through chance and accumulation, in this dance to invert capitalism."`
        },
        { // 6 ANGELA
        name: "ÁNGELA ESQUINAS",
        text: `The work deals with emotional blockages and their relationship with the human body.

        We tend to encapsulate emotions, that is to say, to cut them off, to desensitize, to anesthetize..., due to the education we receive socially and the adaptation to the environment in which we live. This adaptation forces us to a series of relationships among equals and with the environment, often without being aware of it. Adaptation with others and to the environment clings to cultural issues that we have internalized since we are born, but we are generally unaware of this adaptation. They are cultural issues, consciously so measured and so internalized that the body reacts directly to emotions, but we stop feeling them, or rather, we stop being aware that we feel them, creating capsules that remain in the unconscious world but the body expresses it in one way or another. Each body expresses a story, a life. Each body can express accumulated sadness, rage, retained pleasure.
        
        It is common to use the term knot to refer to physical sensations that reveal or give us clues about our emotional state; we speak of a knot in the stomach to refer to fear, knot in the chest to describe sadness, etc.
        
        The work is a reflection of these emotional blockages and their relationship with the human body materialized in a climbing wall, being climbing the key concept and at the same time a metaphor of how each individual can face that emotional rise and fall, those knots, in relation to their own body. It is an interactive sculptural installation project, combining modeling techniques, molds and video.`,
        conjure: `- "By the power of the body and soul, I summon forth the emotional blockages that reside within us. May we come to understand the knots and tangles that reside within us, and through this understanding find the strength to overcome them."`
        },
        { // 7 MARIA
        name: "MARÍA FERNÁNDEZ",
        text: ``,
        conjure: `- "I invoque intimacy and self-reflection, as we examine the role of clothing in shaping our relationships and actions. Let's explore the psychological and sociological implications of the garments we wear, and how they shape our everyday lives."`
        },
        { // 8 LAURA
        name: "LAURA G. BAUTISTA",
        text: ``,
        conjure: `- "As we shift from the macro to the micro, let us uncover the hidden beauty of the bumblebee and discover the warmth and subjectivity of belonging to a territory. Through the transgenerational transfer, let us find a connection between the plants of affection and the family, as we honor the legacy of my grandfather."`
        },
        { // 9 ASCENSION
        name: "ASCENSIÓN",
        text: ``,
        conjure: `- "May we see the dialogue between materials and their appearances, the contrasts, the soft and hard, the opaque and transparent, the inside and outside.May the positive and negative, the liquid and solid, the fragments and their entirety, all serve to bring understanding to the subtle violence that exists in our homes."`
        },
        { // 10 JULIA
        name: "JULIA HOLTMANN",
        text: ``,
        conjure: `- "The small offerings presented here and the grand Möbius strip were born of these rituals, where repetition is a key aspect of the spell. From the grimoire of the artist, familiar strokes are reimagined, enlarged and overlaid with the aid of ancient technologies."`
        },
        { // 11 JULIO
        name: "JULIO LÓPEZ",
        text: ``,
        conjure: `- "I call upon the spirits of war and strife to guide me in this conjure, based on the result of the violence that plagues our land. Through the lens of the copy, I turn my attention to the image, the result of this violence, the fragmentation of the bodies it leaves behind."`
        },
        { // 12 BAYRON
        name: "BAYRON LLANOS",
        text: ``,
        conjure: `- "Memories etched upon metal plates, appearing and disappearing. Concepts of light and space, a ghostly dance. Images plucked from personal archives, speaking of the deceased. Fragments lost, constantly slipping in and out of sight. A reflection on memory, its construction and dissolution."`
        },
        { // 13 MERISHUI
        name: "MERISHUI",
        text: ``,
        conjure: `- "The visions and emotions that arise from meditation, dreams, and the channeling of his innermost thoughts are all captured on canvas. Each brushstroke, each stroke of color, serves as a entry in an intimate diary, a visual record of her innermost search."`
        },
        { // 14 IRENE
        name: "IRENE MONTERO CRUZ",
        text: ``,
        conjure: `- "The struggles of idols, in the realm of entertainment, with a tune plucked from a children's toy, a new magic I unveil, in search of the ideal man, a killer ready to be killed. Humor and absurdity, my guides, in this journey, I invite you to partake."`        
        },
        { // 15 JAVIDEAS
        name: "JAVIDEAS",
        text: ``,
        conjure: `- "I summon forth a critique of the art exhibition and education systems, Challenges and puzzles, to encourage critical thinking, Hidden meanings, cryptic messages, all a test of perception."`
        },
        { // 16 CARLOTA
        name: "CARLOTA MULA",
        text: ``,
        conjure: `- "An ode to presence: Elements of the everyday, recorded, a chronicle of being present. Through Deleuzian thought, a walk through Malaga, holes in the pavement, obsession, an action, a daily ritual, capturing the moment, pulling it out of the ground."`        
        },
        { // 17 GUILLERMO
        name: "GUILLERMO MUÑOZ HORMIGO",
        text: ``,
        conjure: `- "Bodily hybridization, a game of interchangeable parts, A reflection of masculine and feminine identity in the same body, A participation of the spectator, an undefined body map, the change and knowledge, Our maternal-filial bond changed, transformed by this creation."`        
        },
        { // 18 LUCIA
        name: "LUCÍA O'BRIEN ARIAS",
        text: ``,
        conjure: `- "The notion of success, through chance, not effort, A commentary on the delusion of the neoliberal spirit, the skills of chance, The piece, a reminder that not everything can be trained, despite our efforts. No Gain, an invocation to question the premise of success."`        
        },
        { // 19 EDUARDO
        name: "EDUARDO ORTEGA MEDINA",
        text: ``,
        conjure: `- "A subversion, denying itself, word and image intertwined, a crack in the mundane, offering a stimulating future, A strategy of subversion, to question the norm, A play on language and imagery, Oh Palindrome! an invocation to see the world in a different light."`        
        },
        { // 20 EDUARDO
        name: "EDUARDO URDIALES MANZANARO",
        text: ``,
        conjure: `- "In Realistic, Dramatic strokes. The human figure, a canvas, for theatricality to evoke. Dry graphite, charcoal and pastel, the tools of my trade, Meticulous precision, and loose lines, an artist's crusade, Experimentation, the key, to unlock new doors, A personal vision, for the viewer to explore."`        
        },
      ];
    }


  }
  