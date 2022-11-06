

testcard = 414211112222333344445555

cards = ["414211112222333344445555",]

for i in range(1, 100001):

   

    for j in range(4):

        if int(cards[i-1][j]) > 5:
            card = str(int(cards[i-1][j]) + 1)
            cards.append(card)

        else:
            card = str(int(cards[i-1][j]) - 1)
            cards.append(card)

print(cards)

    
    

        



    


