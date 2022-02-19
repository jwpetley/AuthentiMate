import pandas as pd

fake_df = pd.read_csv("Fake.csv", index_col = None, header = 0,
    names = ['title', 'text', 'subject', 'date'])

true_df = pd.read_csv("True.csv", index_col = None, header = 0,
    names = ['title', 'text', 'subject', 'date'])

print(true_df)

for i, row in true_df.iterrows():
    print(row)
    sample_text = row['text']
    sample_title = row['title']

    print(sample_text)



    sample_file = open("true_sample/sample_%i.txt"%i, 'w')
    sample_file.write(sample_title + "\n")
    sample_file.write(sample_text)
    sample_file.close()
